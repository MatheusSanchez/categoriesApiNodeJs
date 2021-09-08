import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUseCase } from './AuthenticateUserCase';

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authUseCase = container.resolve(AuthenticateUseCase);
    const token = await authUseCase.execute({ email, password });
    return response.status(200).json(token);
  }
}

export { AuthenticateController };
