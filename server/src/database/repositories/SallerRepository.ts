import { EntityRepository, Repository } from "typeorm";
import { Saller } from "../entities/Saller";

@EntityRepository( Saller )
export class SallerRepository extends Repository<Saller>{}
