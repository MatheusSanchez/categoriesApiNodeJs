import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
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
  }: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({
      name,
      email,
      password,
      driver_licence,
    });
    await this.repository.save(newUser);
  }
  /*
  async list(): Promise<Category[]> {
    const allCategories = await this.repository.find();
    return allCategories;
  }
  */

  async findByEmail(email: string): Promise<User> {
    const userFounded = await this.repository.findOne({ email });
    return userFounded;
  }
}

export { UsersRepository };
