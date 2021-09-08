import { Router } from 'express';

import { AuthenticateController } from '../modules/accounts/useCases/authentication/AuthenticateController';

const authRouter = Router();
const authController = new AuthenticateController();

authRouter.post('/sessions', authController.handle);

export { authRouter };
