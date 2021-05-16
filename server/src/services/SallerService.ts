import { SallerRepository } from "../database/repositories/SallerRepository"
import { getCustomRepository } from 'typeorm';

interface ISallerService{
    id?: String
    name?: String
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

    async read({id}: ISallerService){
        const sallerRepository = getCustomRepository(SallerRepository);

        const saller = await sallerRepository.findOne({ where: { id }})

        if(!saller)
            throw new Error ("Saller not found!")

        return saller
    }

    async update({ id, name }: ISallerService){
        const sallerRepository = getCustomRepository(SallerRepository)

        const saller = await sallerRepository.findOne({where: { id }})

        if(!saller){
            throw new Error("Saller not found!")
        }

        saller.name = name || saller.name

        return await sallerRepository.save(saller)
    }
}

export { SallerService }