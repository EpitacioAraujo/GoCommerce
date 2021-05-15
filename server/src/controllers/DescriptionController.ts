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
}

export { DescriptionController };
