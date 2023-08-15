import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from '../../Mongo/Interfaces/posts.interfase';

describe('PostsService', () => {
  let service: PostsService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let model: Model<Posts>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: getModelToken('Posts'),
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

    service = module.get<PostsService>(PostsService);
    model = module.get<Model<Posts>>(getModelToken('Posts'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Write more tests for each method in the service
  // For example: create, findAll, findOne, update, remove
});
