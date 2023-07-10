import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from 'src/DTO/user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel('Users')
    private readonly usersModel: Model<UserDTO>,
  ) {}

  create(newUser: UserDTO): Promise<UserDTO> {
    const createdUser = new this.usersModel(newUser);
    return createdUser.save().then((savedUser) => {
      return savedUser.toObject() as UserDTO;
    });
  }
}
