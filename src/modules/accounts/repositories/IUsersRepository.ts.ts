interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_licence: string;
  admin: boolean;
}

interface IUserRepository {
  create({
    name,
    username,
    password,
    email,
    driver_licence,
    admin,
  }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository, ICreateUserDTO };
