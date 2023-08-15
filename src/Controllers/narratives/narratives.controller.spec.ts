import { Test, TestingModule } from '@nestjs/testing';
import { NarrativesController } from './narratives.controller';
import { NarrativesService } from './narratives.service';
import { CreateNarrativeDto } from './dto/create-narrative.dto';
import { Narrative } from './interfaces/narrative.interface';

describe('NarrativesController', () => {
  let controller: NarrativesController;
  let service: NarrativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NarrativesController],
      providers: [NarrativesService],
    }).compile();

    controller = module.get<NarrativesController>(NarrativesController);
    service = module.get<NarrativesService>(NarrativesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of narratives', async () => {
      const result: Narrative[] = [{ /* Mocked narrative data */ }] as Narrative[];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single narrative', async () => {
      const id = 1; // Replace with the desired narrative ID for testing
      const result: Narrative = { /* Mocked narrative data */ } as Narrative;
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne(id)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new narrative', async () => {
      const createDto: CreateNarrativeDto = { /* Replace with the test data for creating a narrative */ };
      const result: Narrative = { /* Mocked created narrative data */ } as Narrative;
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createDto)).toBe(result);
    });
  });
});
