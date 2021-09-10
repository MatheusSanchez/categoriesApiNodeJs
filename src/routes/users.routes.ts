import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const usersRouter = Router();

usersRouter.post('/', createUserController.handle);

usersRouter.patch('/avatar', updateUserAvatarController.handle);

export { usersRouter };
