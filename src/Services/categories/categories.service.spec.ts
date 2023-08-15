import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../../Mongo/Interfaces/categories.interfase';

describe('CategoriesService', () => {
  let service: CategoriesService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let model: Model<Categories>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getModelToken('Categories'),
          useValue: {
            new: jest.fn().mockResolvedValue({}),
            constructor: jest.fn().mockResolvedValue({}),
            find: jest.fn().mockReturnValue([]),
            findById: jest.fn().mockResolvedValue({}),
            findByIdAndUpdate: jest.fn().mockResolvedValue({}),
            findByIdAndRemove: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    model = module.get<Model<Categories>>(getModelToken('Categories'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Write more tests for each method in the service
  // For example: create, findAll, findOne, update, remove
});
