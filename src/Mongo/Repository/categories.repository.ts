// categories.repository.ts

import { Injectable } from '@nestjs/common';
import { CategoriesDTO } from './categories.dto';
import { Categories } from './categories.interface';

@Injectable()
export class CategoriesRepository {
  private readonly categories: Categories[] = [];
  private currentId = 1;

  create(newCategory: CategoriesDTO): Categories {
    const category: Categories = {
      id: this.currentId,
      ...newCategory,
    };
    this.categories.push(category);
    this.currentId++;
    return category;
  }

  findAll(): Categories[] {
    return this.categories;
  }

  findById(id: number): Categories {
    return this.categories.find((category) => category.id === id);
  }

  // Implement other CRUD operations as needed
}
