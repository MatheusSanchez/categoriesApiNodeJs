import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, password, email, driver_licence } = request.body;
      const createUserUseCase = container.resolve(CreateUserUseCase);

      await createUserUseCase.execute({
        name,
        email,
        driver_licence,
        password,
      });

      return response.status(201).json({ message: 'New User Created' });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { CreateUserController };