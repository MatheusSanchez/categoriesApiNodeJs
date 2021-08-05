import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRouter = Router();

const CategoryRepo: CategoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  return response.status(200).json(CategoryRepo.list());
});

export { categoriesRouter };
