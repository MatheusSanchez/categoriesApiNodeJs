import { injectable, inject } from 'tsyringe';

import { Specification } from '../../entities/Specification';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

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
