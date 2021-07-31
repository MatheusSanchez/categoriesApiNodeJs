import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategory } from '../service/CreateCategoryService';

const categoriesRouter = Router();

const CategoryRepo: CategoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  const createService = new CreateCategory(CategoryRepo);
  createService.execute({ name, description });

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
  return response.status(200).json(CategoryRepo.list());
});

export { categoriesRouter };
