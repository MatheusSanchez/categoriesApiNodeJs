import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import { IUserRepository } from '../../repositories/IUsersRepository.ts';

interface IRequest {
  userId: string;
  avatarFile: string;
}
@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}
  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByID(userId);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
