import { Test, TestingModule } from '@nestjs/testing';
import { NarrativesService } from './narratives.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Narrative } from '.././narratives/narratives.service';

describe('NarrativesService', () => {
  let service: NarrativesService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let model: Model<Narrative>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NarrativesService,
        {
          provide: getModelToken('Narrative'),
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

    service = module.get<NarrativesService>(NarrativesService);
    model = module.get<Model<Narrative>>(getModelToken('Narrative'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Write more tests for each method in the service
  // For example: create, findAll, findOne, update, remove
});
