import { inject, injectable } from 'tsyringe';

import {
  ICreateUserDTO,
  IUserRepository,
} from '../../repositories/IUsersRepository.ts';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private userRepository: IUserRepository,
  ) {}

  async execute({
    driver_licence,
    password,
    email,
    username,
    name,
  }: ICreateUserDTO): Promise<void> {
    this.userRepository.create({
      username,
      name,
      password,
      driver_licence,
      email,
    });
  }
}

export { CreateUserUseCase };
