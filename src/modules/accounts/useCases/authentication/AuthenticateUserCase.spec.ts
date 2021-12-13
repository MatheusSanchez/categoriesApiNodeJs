import { AppError } from '@shared/errors/AppError';

import { UsersRepositoryInMemory } from '../../repositories/inMemory/UsersRepositoryInMemory';
import { ICreateUserDTO } from '../../repositories/IUsersRepository.ts';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUseCase } from './AuthenticateUserCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let authUseCase: AuthenticateUseCase;

describe('Authenticate User Case', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authUseCase = new AuthenticateUseCase(usersRepositoryInMemory);
  });

  it('Should be able to auth an user', async () => {
    const newUser: ICreateUserDTO = {
      driver_licence: '001',
      email: 'teste@teste.com',
      name: 'teste',
      password: '12345',
    };

    await createUserUseCase.execute(newUser);

    const token = await authUseCase.execute({
      email: newUser.email,
      password: newUser.password,
    });

    expect(token).toHaveProperty('token');
  });

  it('Should not be able to auth an user that does not exist', async () => {
    expect(async () => {
      const newUser: ICreateUserDTO = {
        driver_licence: '001',
        email: 'teste@teste.com',
        name: 'teste',
        password: '12345',
      };

      // await createUserUseCase.execute(newUser);

      const token = await authUseCase.execute({
        email: newUser.email,
        password: newUser.password,
      });
    }).toBeInstanceOf(AppError);
  });
});
