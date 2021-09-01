import { injectable, inject } from 'tsyringe';

import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../../repositories/ISpecificationsRepository';

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExist =
      this.specificationsRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error('Specification Already Exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
