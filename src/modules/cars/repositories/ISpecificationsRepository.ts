import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
