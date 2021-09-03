import { Router } from 'express';

import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specification', specificationRouter);
router.use('/user', usersRouter);

export { router };
