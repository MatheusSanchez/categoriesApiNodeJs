import { AppError } from '@shared/errors/AppError';

import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let categoriesRepository: CategoriesRepositoryInMemory;

let createCategoryUsecase: CreateCategoryUseCase;
describe('Create Category Use Case', () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoryInMemory();
    createCategoryUsecase = new CreateCategoryUseCase(categoriesRepository);
  });

  it('Should be able to create Category', async () => {
    const infosTest = {
      name: 'Name Category Test',
      description: 'Description Category Test',
    };
    await createCategoryUsecase.execute({
      name: infosTest.name,
      description: infosTest.description,
    });

    const newCategory = await categoriesRepository.findByName(infosTest.name);
    expect(newCategory).toHaveProperty('id');
  });

  it('Should not be able to create Categorywith same name', async () => {
    expect(async () => {
      const infosTest = {
        name: 'Name Category Test',
        description: 'Description Category Test',
      };
      await createCategoryUsecase.execute({
        name: infosTest.name,
        description: infosTest.description,
      });

      await createCategoryUsecase.execute({
        name: infosTest.name,
        description: infosTest.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
