import { User } from '../entities/User';

interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_licence: string;
  id?: string;
  avatar?: string;
}

interface IUserRepository {
  create({
    name,
    password,
    email,
    driver_licence,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByID(id: string): Promise<User>;
}

export { IUserRepository, ICreateUserDTO };
