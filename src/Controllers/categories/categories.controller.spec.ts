import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const result: Category[] = [{ /* Mocked category data */ }] as Category[];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single category', async () => {
      const id = 1; // Replace with the desired category ID for testing
      const result: Category = { /* Mocked category data */ } as Category;
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne(id)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const createDto: CreateCategoryDto = { /* Replace with the test data for creating a category */ };
      const result: Category = { /* Mocked created category data */ } as Category;
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createDto)).toBe(result);
    });
  });
});
