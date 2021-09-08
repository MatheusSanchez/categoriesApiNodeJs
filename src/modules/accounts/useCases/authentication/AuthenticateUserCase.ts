import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../repositories/IUsersRepository.ts';

interface IResponseAuthenticate {
  user: {
    email: string;
    name: string;
  };
  token: string;
}
interface IRequestAuthenticate {
  email: string;
  password: string;
}
@injectable()
class AuthenticateUseCase {
  constructor(
    @inject('UsersRepository') private userRepository: IUserRepository,
  ) {}

  async execute({
    email,
    password,
  }: IRequestAuthenticate): Promise<IResponseAuthenticate> {
    // searching users
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email or password incorrect!');
    }

    // Checking password
    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new Error('Email or password incorrect!');
    }

    // payload and hash to generato token
    const token = sign({}, 'c45793e7fb0c40dd4e0d8de8968766c0', {
      subject: user.id,
      expiresIn: '1d',
    });
    const userInfo: IResponseAuthenticate = {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };

    return userInfo;
  }
}

export { AuthenticateUseCase };
