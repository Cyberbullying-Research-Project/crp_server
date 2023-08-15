// categories.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class CategoriesDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  keywords: string;
}
