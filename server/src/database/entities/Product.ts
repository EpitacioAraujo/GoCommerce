import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

import { Description } from "./Description";
import { Brand } from "./Brand";

@Entity({
    name: "products"
})
class Product{
    @PrimaryColumn()
    id: String

    @Column()
    amount: Number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Description, description => description.products)
    description: Description

    @ManyToOne(() => Brand, brand => brand.products)
    brand: Brand

    @BeforeInsert()
    addId(){
        this.id = uuid();
    }
}

export { Product }