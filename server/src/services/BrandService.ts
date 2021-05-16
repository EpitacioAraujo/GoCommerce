import { getCustomRepository } from "typeorm";
import { BrandRepository } from "../database/repositories/BransRepository";

interface IBrandService{
    id?: String
    name?: String;
}

class BrandService{
    async create({ name }: IBrandService){
        const brandRepository = getCustomRepository(BrandRepository);
        
        if(await brandRepository.findOne({where: { name }})){
            throw new Error("Brand already exists!")
        }
        
        const brand = brandRepository.create({
            name
        });

        await brandRepository.save(brand);

        return brand;
    }

    async read({id}: IBrandService){
        const brandRepository = getCustomRepository(BrandRepository);

        const brand = await brandRepository.findOne({ where: { id }})

        if(!brand)
            throw new Error ("Brand not found!")

        return brand
    }
}

export { BrandService }