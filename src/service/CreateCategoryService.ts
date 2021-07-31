import {
  ICreateCategoryDTO,
  ICategoryRepository,
} from '../repositories/ICategoriesRepository';

class CreateCategory {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists!');
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategory };
