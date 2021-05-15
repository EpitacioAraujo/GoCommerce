import { Request, Response } from 'express';
import { BrandService } from '../services/BrandService';

class BrandController{
    async create(Request: Request, Response: Response){
        const { name } = Request.body;

        const brandService = new BrandService();

        try{
            const brand = await brandService.create({name});

            return Response.status(201).json(brand);
        }catch(err){
            return Response.status(401).json({message: err.message})
        }
    }
}

export { BrandController }