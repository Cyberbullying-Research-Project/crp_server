import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { PostDTO } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post')
    private readonly postModel: Model<Post>,
  ) {}

  async create(newPost: PostDTO): Promise<Post> {
    const createdPost = new this.postModel(newPost);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: number): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async update(id: number, updatedPost: PostDTO): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, updatedPost, {
      new: true,
    });
  }

  async remove(id: number): Promise<Post> {
    return this.postModel.findByIdAndRemove(id);
  }
}
