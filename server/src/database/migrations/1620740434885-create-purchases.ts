import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createPurchases1620740434885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'purchases',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'price',
                        type: 'double',
                        isNullable: false,
                    },
                    {
                        name: 'fk_id_product',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'fk_id_saller',
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

        await queryRunner.createForeignKey('purchases', new TableForeignKey({
            columnNames: ['fk_id_product'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey('purchases', new TableForeignKey({
            columnNames: ['fk_id_saller'],
            referencedColumnNames: ['id'],
            referencedTableName: 'sallers',
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('purchases')
    }

}
