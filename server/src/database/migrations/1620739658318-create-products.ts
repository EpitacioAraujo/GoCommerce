import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createProducts1620739658318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'amount',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'fk_id_description',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'fk_id_brand',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'NOW()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'NOW()',
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('products', new TableForeignKey({
            columnNames: ['fk_id_description'],
            referencedColumnNames: ['id'],
            referencedTableName: 'descriptions',
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey('products', new TableForeignKey({
            columnNames: ['fk_id_brand'],
            referencedColumnNames: ['id'],
            referencedTableName: 'brands',
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
