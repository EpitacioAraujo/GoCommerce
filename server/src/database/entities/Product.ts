import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { Description } from "./Description";
import { Brand } from "./Brand";

@Entity({
    name: "Products"
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
}

export { Product }