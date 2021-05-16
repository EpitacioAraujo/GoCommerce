import { getCustomRepository } from "typeorm";
import { DescriptionRepository } from "../database/repositories/DescriptionRepository";

interface IDescriptionService {
    id?: String
    name?: String
    created_at?: Date
    updated_at?: Date
}

class DescriptionService{
    async create({ name }: IDescriptionService){
        const descriptionRepository = getCustomRepository(DescriptionRepository);

        const alreadyExist = await descriptionRepository.findOne({where: { name }})

        if(alreadyExist){
            throw new Error("User already exist!");
        }

        const description = descriptionRepository.create({
            name
        });

        await descriptionRepository.save(description); 

        return description;
    }

    async read({ id }: IDescriptionService){
        const descriptionRepository = getCustomRepository(DescriptionRepository);

        const description = await descriptionRepository.findOne({ where: { id } })

        if(!description)
            throw new Error("Description not found!")

        return description
    }

    async update({id, name}: IDescriptionService){
        const descriptionRepository = getCustomRepository(DescriptionRepository);

        const description = await descriptionRepository.findOne({ where: { id }})

        if(!description)
            throw new Error("Description not found!")

        description.name = name;

        return await descriptionRepository.save(description)
    }
}

export { DescriptionService }
