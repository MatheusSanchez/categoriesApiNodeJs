import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const newSpecification = new Specification();
    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(newSpecification);
  }
  list(): Specification[] {
    return this.specifications;
  }
  findByName(name: string): Specification {
    const foundedSpecifications = this.specifications.find(s => s.name == name);

    return foundedSpecifications;
  }
}

export { SpecificationRepository };
