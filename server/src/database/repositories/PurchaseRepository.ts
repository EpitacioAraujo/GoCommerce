import { EntityRepository, Repository } from "typeorm";
import { Purchase } from "../entities/Purchase";

interface IEntityRepository {
    id: String
}

@EntityRepository( Purchase )
export class PurchaseRepository extends Repository<Purchase> {
    async findById({ id }: IEntityRepository){
        const query = ``
                    + `SELECT `
                    + `    pc.*, `
                    + `    pr.id AS product, `
                    + `    pr.amount, `
                    + `    ds.name AS product, `
                    + `    br.name AS brand `
                    + `FROM purchases AS pc `
                    + `LEFT JOIN products AS pr ON pr.id = pc.productId `
                    + `LEFT JOIN descriptions AS ds ON pr.descriptionId  = ds.id `
                    + `LEFT JOIN brands AS br ON pr.brandId = br.id `
                    + `WHERE pc.id = '${id}' `
                    
        return await this.query( query )
    }
}