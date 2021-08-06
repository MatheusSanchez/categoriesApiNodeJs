import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const allCategories = this.listSpecificationUseCase.execute();
    return response.status(200).json(allCategories);
  }
}

export { ListSpecificationController };
