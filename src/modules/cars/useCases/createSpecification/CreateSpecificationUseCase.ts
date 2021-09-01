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
  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExist =
      await this.specificationsRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error('Specification Already Exists!');
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
