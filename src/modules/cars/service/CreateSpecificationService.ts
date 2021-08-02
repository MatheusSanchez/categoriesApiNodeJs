import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../repositories/ISpecificationsRepository';

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExist =
      this.specificationsRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error('Specification Already Exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
