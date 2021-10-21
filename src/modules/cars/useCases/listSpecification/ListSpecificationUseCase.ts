import { injectable, inject } from 'tsyringe';

import { Specification } from '@modules/cars/entities/Specification';
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: SpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const allSpecifications = await this.specificationRepository.list();
    return allSpecifications;
  }
}

export { ListSpecificationUseCase };
