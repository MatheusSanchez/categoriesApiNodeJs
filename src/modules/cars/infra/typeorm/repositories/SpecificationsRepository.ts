import { getRepository, Repository } from 'typeorm';

import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const newSpecification = this.repository.create({ name, description });
    await this.repository.save(newSpecification);
  }
  async list(): Promise<Specification[]> {
    const allSpecifications: Specification[] = await this.repository.find();
    return allSpecifications;
  }
  async findByName(name: string): Promise<Specification> {
    const foundedSpecifications = await this.repository.findOne({ name });

    return foundedSpecifications;
  }
}

export { SpecificationsRepository };
