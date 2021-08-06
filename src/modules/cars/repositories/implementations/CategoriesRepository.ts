import { Category } from '../../model/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];
  private static INSTACE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTACE) {
      CategoriesRepository.INSTACE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTACE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const newCategory = new Category();

    Object.assign(newCategory, { name, description, created_at: new Date() });
    this.categories.push(newCategory);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const categoryFounded = this.categories.find(
      category => category.name === name,
    );
    return categoryFounded;
  }
}

export { CategoriesRepository };
