// posts.repository.ts

import { Injectable } from '@nestjs/common';
import { PostsDTO } from './posts.dto';
import { Posts } from './posts.interface';

@Injectable()
export class PostsRepository {
  private readonly posts: Posts[] = [];
  private currentId = 1;

  create(newPost: PostsDTO): Posts {
    const post: Posts = {
      id: this.currentId,
      ...newPost,
      created_at: new Date(),
      resources: 0, // Initialize resource ID as 0; replace with actual resource ID
    };
    this.posts.push(post);
    this.currentId++;
    return post;
  }

  findAll(): Posts[] {
    return this.posts;
  }

  findById(id: number): Posts {
    return this.posts.find((post) => post.id === id);
  }

  // Implement other CRUD operations as needed
}
