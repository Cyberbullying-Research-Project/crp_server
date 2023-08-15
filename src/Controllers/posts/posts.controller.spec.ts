import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './entities/post.entity';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of posts', async () => {
      const result: PostEntity[] = [{ /* Mocked post data */ }] as PostEntity[];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single post', async () => {
      const id = 1; // Replace with the desired post ID for testing
      const result: PostEntity = { /* Mocked post data */ } as PostEntity;
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne(id)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new post', async () => {
      const createDto: CreatePostDto = { /* Replace with the test data for creating a post */ };
      const result: PostEntity = { /* Mocked created post data */ } as PostEntity;
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createDto)).toBe(result);
    });
  });
});
