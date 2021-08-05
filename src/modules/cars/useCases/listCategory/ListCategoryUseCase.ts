import { Category } from '../../model/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute(): Category[] {
    const categoryAlreadyExists = this.categoryRepository.list();
    return categoryAlreadyExists;
  }
}

export { ListCategoryUseCase };
