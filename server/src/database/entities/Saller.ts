import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Purchase } from "./Purchase";

@Entity({
    name: 'sallers'
})
class Saller{
    @PrimaryColumn()
    id: String

    @Column()
    name: String

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Purchase, purchase => purchase.saller)
    purchases: Purchase[]

    @BeforeInsert()
    addId(){
        this.id = uuid()
    }
}

export { Saller }