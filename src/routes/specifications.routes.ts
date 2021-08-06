import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationRouter = Router();

specificationRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRouter.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRouter };
