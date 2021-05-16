import { Request, Response } from 'express';
import { DescriptionService } from '../services/DescriptionService';

class DescriptionController{
    async create(Request: Request, Response: Response){
        const { name } = Request.body;

        const descriptionService = new DescriptionService();

        try{
            const description = await descriptionService.create({ name });

            return Response.status(201).json(description);
        }catch(err){
            return Response.status(400).json({message: err.message})
        }
    }

    async read(Request: Request, Response: Response){
        const { id } = Request.params

        const descriptionService = new DescriptionService()

        try{
            const description = await descriptionService.read({
                id
            })

            return Response.status(200).json(description)
        }catch(err){
            return Response.status(404).json({message: err.message})
        }
    }

    async update(Request: Request, Response: Response){
        const { id } = Request.params
        const { name } = Request.body

        const descriptionService = new DescriptionService()

        try{
            const description = await descriptionService.update({ id, name })

            return Response.status(200).json(description)
        }catch(err){
            return Response.status(404).json({message: err.message})
        }
    }
}

export { DescriptionController };
