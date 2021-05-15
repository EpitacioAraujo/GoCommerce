import { getCustomRepository } from "typeorm";
import { DescriptionRepository } from "../database/repositories/DescriptionRepository";

interface IDescriptionService {
    name: String
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
}

export { DescriptionService }
