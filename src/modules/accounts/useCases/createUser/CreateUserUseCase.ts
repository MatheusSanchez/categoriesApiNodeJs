import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

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
    name,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError(`Email ${email} already exist !`);
    }
    const hashPass = await hash(password, 8);
    this.userRepository.create({
      name,
      password: hashPass,
      driver_licence,
      email,
    });
  }
}

export { CreateUserUseCase };
