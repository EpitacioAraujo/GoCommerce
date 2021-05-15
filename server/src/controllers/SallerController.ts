import { Request, Response } from 'express';
import { SallerService } from '../services/SallerService';

class SallerController {
    async create(Request: Request, Response: Response){
        const { name } = Request.body
        
        const sallerService = new SallerService();

        try{
            const saller = await sallerService.create({name});

            return Response.status(201).json(saller)
        }catch(err){
            return Response.status(401).json({
                message: err.message
            })
        }
    }
}

export { SallerController }