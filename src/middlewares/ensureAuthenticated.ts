import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import { AppError } from '../errors/AppError';
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
    throw new AppError('Token Missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      'c45793e7fb0c40dd4e0d8de8968766c0',
    ) as IPayload;
    const usersRepository = new UsersRepository();

    const foundedUser = await usersRepository.findByID(user_id);
    if (!foundedUser) {
      throw new AppError('User does not exists !', 401);
    }

    request.user = {
      id: foundedUser.id,
    };

    next();
  } catch {
    throw new AppError('Invalid Token !', 401);
  }
}
