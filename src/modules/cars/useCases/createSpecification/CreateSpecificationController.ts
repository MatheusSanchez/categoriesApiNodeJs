import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateSpecificationDTO } from '../../repositories/ISpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description }: ICreateSpecificationDTO = request.body;
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase,
      );
      await createSpecificationUseCase.execute({ name, description });
      return response
        .status(201)
        .json({ sucess: 'New Specification Created !' });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateSpecificationController };
