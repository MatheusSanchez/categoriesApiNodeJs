import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRouter.use(ensureAuthenticated);
specificationRouter.post('/', createSpecificationController.handle);

specificationRouter.get('/', listSpecificationController.handle);

export { specificationRouter };
