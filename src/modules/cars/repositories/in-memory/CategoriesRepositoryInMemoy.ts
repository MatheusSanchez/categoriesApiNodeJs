import { Category } from '../../entities/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoryRepository {
  categories: Category[];
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const newCategory: Category = new Category();
    Object.assign(newCategory, {
      name,
      description,
    });
    this.categories.push(newCategory);
  }
  async list(): Promise<Category[]> {
    return this.categories;
  }
  async findByName(name: string): Promise<Category> {
    const foundedCategory = this.categories.find(
      category => category.name === name,
    );

    return foundedCategory;
  }
}

export default { CategoriesRepositoryInMemory };
