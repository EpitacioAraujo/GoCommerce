import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { DescriptionRepository } from './../database/repositories/DescriptionRepository';

class DescriptionController{
    async create(Request: Request, Response: Response){
        const descriptionRepository = getCustomRepository(DescriptionRepository);
        const description = descriptionRepository.create();
        
        const { name } = Request.body;

        description.name = name;

        try{
            await descriptionRepository.save(description);

            return Response.status(201).json(description);
        }catch(err){
            return Response.status(500).json({
                message: "Internal error server!"
            })
        }
    }
}

export { DescriptionController };
