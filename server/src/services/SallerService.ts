import { SallerRepository } from "../database/repositories/SallerRepository"
import { getCustomRepository } from 'typeorm';

interface ISallerService{
    name: String
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
}

export { SallerService }