import { Request, Response } from 'express';
import { PurchaseService } from '../services/PurchaseService';

class PurchaseController {
    async create(Request: Request, Response: Response){
        const { fk_id_product, fk_id_saller, price } = Request.body

        const purchaseService = new PurchaseService()

        try{
            const purchase = await purchaseService.create({
                fk_id_product,
                fk_id_saller,
                price
            })

            return Response.status(201).json(purchase)
        }catch(err){
            return Response.status(401).json({message: err.message})
        }
    }
}

export { PurchaseController }