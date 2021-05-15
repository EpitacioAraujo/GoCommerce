import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Product } from "./Product";

@Entity({
    name: "brands"
})
class Brand{
    @PrimaryColumn()
    id: String

    @Column()
    name: String

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Product, product => product.brand)
    products: Product[]

    @BeforeInsert()
    addId(){
        this.id = uuid();
    }
}

export { Brand }
