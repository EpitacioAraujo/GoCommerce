import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../database/repositories/ProductRepository';
import { SallerRepository } from './../database/repositories/SallerRepository';
import { PurchaseRepository } from './../database/repositories/PurchaseRepository';

interface IPurchaseService{
    fk_id_product: String
    fk_id_saller: String
    price: Number
}

interface IPurchaseReadService{
    id: String
}

class PurchaseService {
    async create({fk_id_product, fk_id_saller, price}: IPurchaseService){
        const purchaseRepository = getCustomRepository(PurchaseRepository)
        const productRepository = getCustomRepository(ProductRepository)
        const sallerRepository = getCustomRepository(SallerRepository)

        const saller = await sallerRepository.findOne({where: {id: fk_id_saller}})
        const product = await productRepository.findOne({where: {id: fk_id_product}})

        const purchase = purchaseRepository.create({
            saller,
            product,
            price
        })

        return await purchaseRepository.save(purchase)
    }

    async read({id}: IPurchaseReadService){
        const purchaseRepository = getCustomRepository(PurchaseRepository)

        const purchase = purchaseRepository.findOne({
            where: {
                id
            },
            join: {
                alias: 'purchase',
                leftJoinAndSelect: {
                    product: 'purchase.product',
                    saller: 'purchase.saller'
                }
            }
        })

        if(!purchase)
            throw new Error("Purchase not found!")

        return purchase
    }
}

export { PurchaseService }