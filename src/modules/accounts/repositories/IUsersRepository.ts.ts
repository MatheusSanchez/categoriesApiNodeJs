interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_licence: string;
}

interface IUserRepository {
  create({
    name,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository, ICreateUserDTO };
