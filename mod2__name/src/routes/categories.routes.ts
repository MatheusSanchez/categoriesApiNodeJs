import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();

const CategoryRepo: CategoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = CategoryRepo.findByName(name);
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'This Category Already Exists' });
  }

  CategoryRepo.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
  return response.status(200).json(CategoryRepo.list());
});

export { categoriesRouter };
