import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  ArrayMinSize,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from '../DTO/user.dto';

export class ResourcesDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  // @Type(() => UserDTO)
  @ArrayMinSize(1)
  // @IsNotEmptyObject()
  // @ValidateNested({ each: true })
  readonly created_by: UserDTO[];

  @IsNotEmpty()
  readonly path: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly size: number;
}
