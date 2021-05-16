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

    async read(Request: Request, Response: Response){
        const { id } = Request.params

        const brandService = new BrandService()

        try{
            const brand = await brandService.read({ id })

            return Response.status(200).json( brand )
        }catch(err){
            return Response.status(400).json({message: err.message})
        }
    }

    async update(Request: Request, Response: Response){
        const { id } = Request.params
        const { name } = Request.body

        const brandService = new BrandService()

        try{
            const brand = await brandService.update({ id, name })

            return Response.status(200).json( brand )
        }catch(err){
            return Response.status(400).json({message: err.message})
        }
    }
}

export { BrandController }