import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '@modules/cars/useCases/listCategory/ListCategoryController';

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

const upload = multer({
  dest: './tmp',
});

const categoriesRouter = Router();

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.get('/', listCategoryController.handle);
categoriesRouter.post(
  '/imports',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRouter };
