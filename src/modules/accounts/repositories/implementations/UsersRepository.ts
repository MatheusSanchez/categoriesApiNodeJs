import { getRepository, Repository } from 'typeorm';

import { User } from '@modules/accounts/entities/User';

import { IUserRepository, ICreateUserDTO } from '../IUsersRepository.ts';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    driver_licence,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({
      name,
      email,
      password,
      driver_licence,
      id,
      avatar,
    });
    await this.repository.save(newUser);
  }
  async findByID(id: string): Promise<User> {
    const userFounded = await this.repository.findOne({ id });
    return userFounded;
  }

  async findByEmail(email: string): Promise<User> {
    const userFounded = await this.repository.findOne({ email });
    return userFounded;
  }
}

export { UsersRepository };
