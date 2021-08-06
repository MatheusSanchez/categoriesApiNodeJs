import { Request, Response } from 'express';

import { ICreateSpecificationDTO } from '../../repositories/ISpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationService';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description }: ICreateSpecificationDTO = request.body;
    this.createSpecificationUseCase.execute({ name, description });
    return response.status(201).json({ sucess: 'New Specification Created !' });
  }
}

export { CreateSpecificationController };
