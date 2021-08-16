import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path); // reading stream

      const parseFile = csvParse();
      stream.pipe(parseFile); // execute parseFile while you are reading the file

      const categories: IImportCategory[] = [];

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async category => {
      const { name, description } = category;
      const existsCategory = this.categoryRepository.findByName(name);
      if (!existsCategory) {
        this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
