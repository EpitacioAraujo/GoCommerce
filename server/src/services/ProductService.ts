import { getCustomRepository } from "typeorm"
import { ProductRepository } from './../database/repositories/ProductRepository';
import { BrandRepository } from './../database/repositories/BransRepository';
import { DescriptionRepository } from "../database/repositories/DescriptionRepository";
import { Brand } from "../database/entities/Brand";
import { Description } from "../database/entities/Description";

interface IProductService {
    id?: String
    fk_id_description?: String
    fk_id_brand?: String
    amount?: Number
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

    async read({id}: IProductService){
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

    async update({id, amount, fk_id_brand, fk_id_description}: IProductService){
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne({ where: {id} })
        if(!product)
            throw new Error("Product not found!")

        let brand: Brand
        if(fk_id_brand){
            brand = await getCustomRepository(BrandRepository).findOne({where: { id: fk_id_brand }})
            if(!brand)
                throw new Error("Invalid brand sended!");
        }

        let description: Description
        if(fk_id_description){
            description = await getCustomRepository(DescriptionRepository).findOne({ where: { id: fk_id_description }})
            if(!description)
                throw new Error("Invalid description sended!");
        }
        product.amount = amount || product.amount
        product.brand = brand || product.brand
        product.description = description || product.description

        await productRepository.save(product)

        return await productRepository.findOne(
                                                { 
                                                    where: { id },
                                                    join: {
                                                        alias: 'product',
                                                        leftJoinAndSelect: {
                                                            brand: 'product.brand',
                                                            description: 'product.description'
                                                        }
                                                    }
                                                }
                                            )
    }
}

export { ProductService }
