import { User } from '../../entities/User';
import { ICreateUserDTO, IUserRepository } from '../IUsersRepository.ts';

class UsersRepositoryInMemory implements IUserRepository {
  users: User[] = [];
  async create({
    name,
    password,
    email,
    driver_licence,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const newUser = new User();

    Object.assign(newUser, {
      name,
      password,
      email,
      driver_licence,
      id,
      avatar,
    });
    this.users.push(newUser);
  }
  async findByEmail(email: string): Promise<User> {
    const foundedUser = this.users.find(user => user.email === email);

    return foundedUser;
  }
  async findByID(id: string): Promise<User> {
    const foundedUser = this.users.find(user => user.id === id);

    return foundedUser;
  }
}

export { UsersRepositoryInMemory };
