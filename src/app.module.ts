import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourcesController } from './Controllers/resources/resources.controller';
import { UsersController } from './Controllers/users/users.controller';
import { ResourcesService } from './Services/resources/resources.service';
import { ResourcesRepository } from './Mongo/Repository/resources.repository';
import { ResourcesSchema } from './Mongo/Schemas/resources.schemas';
import { UsersRepository } from './Mongo/Repository/users.repository';
import { UsersService } from './Services/users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://atoscano:5p6n20dLPQ7BAO2b@cluster0.mmjdpq7.mongodb.net/ciberbullingdb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    MongooseModule.forFeature([
      { name: 'Resources', schema: ResourcesSchema },
      { name: 'Users', schema: ResourcesSchema },
    ]),
  ],
  controllers: [ResourcesController, UsersController],
  providers: [
    ResourcesService,
    ResourcesRepository,
    UsersService,
    UsersRepository,
  ],
})
export class AppModule {}
