import { getCustomRepository } from "typeorm"
import { ProductRepository } from './../database/repositories/ProductRepository';
import { BrandRepository } from './../database/repositories/BransRepository';
import { DescriptionRepository } from "../database/repositories/DescriptionRepository";

interface IProductService {
    fk_id_description: String
    fk_id_brand: String
    amount: Number
}

interface IProductReadService {
    id?: String
}

class ProductService{
    async create({fk_id_brand, fk_id_description, amount}: IProductService){
        const productRepository = getCustomRepository(ProductRepository)
        const brandRepository = getCustomRepository(BrandRepository)
        const descriptionRepository = getCustomRepository(DescriptionRepository)

        const verifyExistis = await productRepository.findOne({
            where: {
                brand: fk_id_brand,
                description: fk_id_description
            }
        })

        if(verifyExistis){
            throw new Error("Product already exists!")
        }

        const brand = await brandRepository.findOne({where: {id: fk_id_brand}})
        const description = await descriptionRepository.findOne({where: {id: fk_id_description}})

        const product = productRepository.create({
            brand,
            description,
            amount
        })
        
        return await productRepository.save(product)
    }

    async read({id}: IProductReadService){
        const productRepository = getCustomRepository(ProductRepository)

        const product = productRepository.findOne({
            where: {
                id
            },
            join: {
                alias: 'product',
                leftJoinAndSelect: {
                    brand: 'product.brand',
                    description: 'product.description'
                }
            }
        })

        if(!product)
            throw new Error("Product not found!")

        return product
    }
}

export { ProductService }
