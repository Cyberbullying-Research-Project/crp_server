import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/DTO/user.dto';
import { UsersRepository } from 'src/Mongo/Repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(newUser: UserDTO): Promise<UserDTO> {
    return this.usersRepository.create(newUser);
  }
}
