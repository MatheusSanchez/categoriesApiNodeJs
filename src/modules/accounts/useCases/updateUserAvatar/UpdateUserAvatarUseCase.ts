import { inject } from 'tsyringe';

import { IUserRepository } from '../../repositories/IUsersRepository.ts';

interface IRequest {
  userId: string;
  avatarFile: string;
}

class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}
  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByID(userId);
    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
