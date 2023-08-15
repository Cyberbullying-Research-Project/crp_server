// narratives.dto.ts

import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class NarrativesDTO {
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
  category_id: number;
}
