import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Product } from './Product';

@Entity({
    name: "descriptions"
})
class Description{
    @PrimaryColumn()
    id: String

    @Column()
    name: String

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Product, product => product.description)
    products: Product[]

    @BeforeInsert()
    addId(){
        this.id = uuid()
    }
}

export { Description };
