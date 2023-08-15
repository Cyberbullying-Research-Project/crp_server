// posts.dto.ts

import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class PostsDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsOptional()
  user_id: number;

  @IsOptional()
  resource_id: number;
}
