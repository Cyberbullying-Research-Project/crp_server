import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../../Mongo/Interfaces/categories.interfase';
import { CategoriesDTO } from '../../DTO/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Categories')
    private readonly categoryModel: Model<Categories>,
  ) {}

  async create(newCategories: CategoriesDTO): Promise<Categories> {
    const createdCategories = new this.categoryModel(newCategories);
    return createdCategories.save();
  }

  async findAll(): Promise<Categories[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: number): Promise<Categories> {
    return this.categoryModel.findById(id).exec();
  }

  async update(
    id: number,
    updatedCategories: CategoriesDTO,
  ): Promise<Categories> {
    return this.categoryModel.findByIdAndUpdate(id, updatedCategories, {
      new: true,
    });
  }

  async remove(id: number): Promise<Categories> {
    return this.categoryModel.findByIdAndRemove(id);
  }
}
