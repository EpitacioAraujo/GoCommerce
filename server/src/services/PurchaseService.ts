import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../database/repositories/ProductRepository';
import { SallerRepository } from './../database/repositories/SallerRepository';
import { PurchaseRepository } from './../database/repositories/PurchaseRepository';
import { Product } from '../database/entities/Product';
import { Saller } from '../database/entities/Saller';

interface IPurchaseService{
    id?: String
    fk_id_product?: String
    fk_id_saller?: String
    price?: Number
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

    async read({id}: IPurchaseService){
        const purchaseRepository = getCustomRepository(PurchaseRepository)

        const purchase =  await purchaseRepository.findById({ id })

        if(!purchase)
            throw new Error("Purchase not found!")

        return purchase
    }   

    async update({id, fk_id_product, fk_id_saller, price}: IPurchaseService){
        const purchaseRepository = getCustomRepository(PurchaseRepository)
        const purchase = await purchaseRepository.findOne({where: { id }})
        if(!purchase)
            throw new Error("Purchase not found!");
        
        if(fk_id_product){
            const productRepository = getCustomRepository(ProductRepository)

            const product = await productRepository.findOne({where: {id: fk_id_product}})

            if(!product){
                throw new Error("Product not found!");
            }else{
                purchase.product = product
            }
        }

        if(fk_id_saller){
            const sallerRepository = getCustomRepository(SallerRepository)

            const saller = await sallerRepository.findOne({where: {id: fk_id_saller}})

            if(!saller){
                throw new Error("Saller not found!");
            }else{
                purchase.saller = saller
            }
        }

        purchase.price = price || purchase.price

        await purchaseRepository.save(purchase)

        return await purchaseRepository.findById({ id })
    }
}

export { PurchaseService }