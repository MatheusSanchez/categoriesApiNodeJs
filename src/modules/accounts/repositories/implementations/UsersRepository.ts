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
    username,
    email,
    password,
    driver_licence,
  }: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({
      name,
      username,
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

  async findByName(name: string): Promise<Category> {
    const categoryFounded = await this.repository.findOne({ name });
    return categoryFounded;
  }

  */
}

export { UsersRepository };
