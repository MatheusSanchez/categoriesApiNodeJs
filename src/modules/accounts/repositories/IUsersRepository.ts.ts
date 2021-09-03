interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_licence: string;
}

interface IUserRepository {
  create({
    name,
    username,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository, ICreateUserDTO };
