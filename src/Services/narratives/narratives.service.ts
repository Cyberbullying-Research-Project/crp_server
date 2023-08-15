import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Narratives } from '../../Mongo/Interfaces/narratives.interfase';
import { NarrativesDTO } from '../../DTO/narratives.dto';

@Injectable()
export class NarrativessService {
  constructor(
    @InjectModel('Narratives')
    private readonly narrativeModel: Model<Narratives>,
  ) {}

  async create(newNarratives: NarrativesDTO): Promise<Narratives> {
    const createdNarratives = new this.narrativeModel(newNarratives);
    return createdNarratives.save();
  }

  async findAll(): Promise<Narratives[]> {
    return this.narrativeModel.find().exec();
  }

  async findOne(id: number): Promise<Narratives> {
    return this.narrativeModel.findById(id).exec();
  }

  async update(
    id: number,
    updatedNarratives: NarrativesDTO,
  ): Promise<Narratives> {
    return this.narrativeModel.findByIdAndUpdate(id, updatedNarratives, {
      new: true,
    });
  }

  async remove(id: number): Promise<Narratives> {
    return this.narrativeModel.findByIdAndRemove(id);
  }
}
export { Narratives };
