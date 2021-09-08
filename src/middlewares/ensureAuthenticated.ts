import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error('Token Missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      'c45793e7fb0c40dd4e0d8de8968766c0',
    ) as IPayload;
    console.log(user_id);
    const usersRepository = new UsersRepository();

    const foundedUser = usersRepository.findByID(user_id);
    if (!foundedUser) {
      throw new Error('User does not exists !');
    }

    next();
  } catch {
    throw new Error('Invalid Token !');
  }
}
