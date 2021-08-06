import { SpecificationRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationService';

const specificationsRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
