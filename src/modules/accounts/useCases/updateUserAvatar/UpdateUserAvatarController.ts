import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { userId } = request.user;
    const avatarFile = null;
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    updateUserAvatarUseCase.execute({ userId, avatarFile });
  }
}

export { UpdateUserAvatarController };
