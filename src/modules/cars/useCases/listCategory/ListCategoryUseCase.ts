import { Category } from '../../model/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute(): Category[] {
    const allCategories = this.categoryRepository.list();
    return allCategories;
  }
}

export { ListCategoryUseCase };
