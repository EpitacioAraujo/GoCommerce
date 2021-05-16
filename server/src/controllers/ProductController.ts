import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

class ProductController{
    async create(Request: Request, Response: Response){
        const {amount, fk_id_brand, fk_id_description} = Request.body

        const productService = new ProductService();

        try{
            const product = await productService.create({
                amount,
                fk_id_brand,
                fk_id_description
            })

            return Response.status(201).json(product)
        }catch(err){
            return Response.status(401).json({
                message: err.message
            })
        }
    }

    async read(Request: Request, Response: Response){
        const { id } = Request.params

        const productService = new ProductService();

        try{
            const product = await productService.read({id})

            return Response.status(201).json(product)
        }catch(err){
            return Response.status(400).json({ message: err.message })
        }
    }

    async update(Request: Request, Response: Response){
        const { id } = Request.params
        const { amount, fk_id_brand, fk_id_description } = Request.body

        const productService = new ProductService();

        try{
            const product = await productService.update({
                id,
                amount,
                fk_id_brand,
                fk_id_description
            })

            return Response.status(201).json(product)
        }catch(err){
            return Response.status(401).json({
                message: err.message
            })
        }
    }
}

export { ProductController }