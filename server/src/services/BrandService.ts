import { getCustomRepository } from "typeorm";
import { BrandRepository } from "../database/repositories/BransRepository";

interface IBrandService{
    name: String;
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
}

export { BrandService }