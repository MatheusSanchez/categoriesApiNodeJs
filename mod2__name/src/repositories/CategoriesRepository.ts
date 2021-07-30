import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
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
