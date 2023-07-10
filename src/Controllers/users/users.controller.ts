import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/DTO/user.dto';
import { UsersService } from '../../Services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() newUser: UserDTO): Promise<UserDTO> {
    return this.usersService.create(newUser);
  }
}
