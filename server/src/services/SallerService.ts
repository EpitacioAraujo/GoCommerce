import { SallerRepository } from "../database/repositories/SallerRepository"
import { getCustomRepository } from 'typeorm';

interface ISallerService{
    name: String
}

interface ISallerReadService{
    id: String
}

class SallerService {
    async create({ name }: ISallerService){
        const sallerRepository = getCustomRepository(SallerRepository)

        if(await sallerRepository.findOne({where: { name }})){
            throw new Error("Saller already exists!")
        }

        const saller = sallerRepository.create({
            name
        })

        return await sallerRepository.save(saller)
    }

    async read({id}: ISallerReadService){
        const sallerRepository = getCustomRepository(SallerRepository);

        const saller = await sallerRepository.findOne({ where: { id }})

        if(!saller)
            throw new Error ("Saller not found!")

        return saller
    }
}

export { SallerService }