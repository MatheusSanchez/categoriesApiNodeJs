import { inject, injectable } from 'tsyringe';

import {
  ICreateCategoryDTO,
  ICategoryRepository,
} from '../../repositories/ICategoriesRepository';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name,
    );
    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists!');
    }

    await this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
