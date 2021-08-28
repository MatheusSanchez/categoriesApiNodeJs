import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUsecase: CreateCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    try {
      await this.createCategoryUsecase.execute({ name, description });
    } catch (e) {
      return response.status(400).send({ error: e.message });
    }

    return response.status(201).send();
  }
}

export { CreateCategoryController };
