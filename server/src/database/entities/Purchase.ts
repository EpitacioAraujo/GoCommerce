import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

import { Saller } from "./Saller";
import { Product } from "./Product";

@Entity({
    name: 'purchases'
})
class Purchase{
    @PrimaryColumn()
    id: String

    @Column()
    price: Number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Saller, saller => saller.purchases)
    saller: Saller

    @ManyToOne(() => Product, product => product.purchases)
    product: Product

    @BeforeInsert()
    addId(){
        this.id = uuid()
    }
}

export { Purchase }