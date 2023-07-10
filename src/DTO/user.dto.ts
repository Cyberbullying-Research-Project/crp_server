import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  readonly created_at: Date;

  readonly updated_at: Date;
}
