import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUsecase = container.resolve(CreateCategoryUseCase);
    try {
      await createCategoryUsecase.execute({ name, description });
    } catch (e) {
      return response.status(400).send({ error: e.message });
    }

    return response.status(201).send();
  }
}

export { CreateCategoryController };
