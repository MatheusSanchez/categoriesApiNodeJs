import { hash } from 'bcrypt';
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
    name,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);
    console.log(userAlreadyExist);
    if (userAlreadyExist) {
      throw new Error(`Email ${email} already exist !`);
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
