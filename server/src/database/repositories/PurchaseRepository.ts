import { EntityRepository, Repository } from "typeorm";
import { Purchase } from "../entities/Purchase";

@EntityRepository( Purchase )
export class PurchaseRepository extends Repository<Purchase> {}