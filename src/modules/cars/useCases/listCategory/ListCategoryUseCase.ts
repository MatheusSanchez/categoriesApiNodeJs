import { injectable, inject } from 'tsyringe';

import { Category } from '../../infra/typeorm/entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) {}
  async execute(): Promise<Category[]> {
    const allCategories = await this.categoryRepository.list();
    return allCategories;
  }
}

export { ListCategoryUseCase };
