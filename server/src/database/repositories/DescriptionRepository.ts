import { EntityRepository, Repository } from 'typeorm';
import { Description } from '../entities/Description';

@EntityRepository( Description )
export class DescriptionRepository extends Repository<Description> {}