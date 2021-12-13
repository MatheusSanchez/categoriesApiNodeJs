import { container } from 'tsyringe';

import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUsersRepository.ts';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
