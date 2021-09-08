import { injectable, inject } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
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
      throw new AppError('Specification Already Exists!', 500);
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
