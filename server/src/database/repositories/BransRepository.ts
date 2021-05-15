import { EntityRepository, Repository } from "typeorm";
import { Brand } from "../entities/Brand";

@EntityRepository( Brand )
export class BrandRepository extends Repository<Brand>{}
