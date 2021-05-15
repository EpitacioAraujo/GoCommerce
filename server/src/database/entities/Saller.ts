import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

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

    @BeforeInsert()
    addId(){
        this.id = uuid()
    }
}

export { Saller }