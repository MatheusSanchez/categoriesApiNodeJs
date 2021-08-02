import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/service/CreateSpecificationService';

const specificationRouter = Router();

const SpecificationRepo: SpecificationRepository =
  new SpecificationRepository();

specificationRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    SpecificationRepo,
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).json({ sucess: 'New Specification Created !' });
});

specificationRouter.get('/', (request, response) => {
  return response.status(200).json(SpecificationRepo.list());
});

export { specificationRouter };
