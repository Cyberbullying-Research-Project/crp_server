import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourcesDTO } from 'src/DTO/resources.dto';
import { Resource } from '../Interfaces/resource.interface';

@Injectable()
export class ResourcesRepository {
  constructor(
    @InjectModel('Resources')
    private readonly resourcesModel: Model<Resource>,
  ) {}

  findAll(): string {
    return 'This action returns all resources';
  }

  findOne(): string {
    return 'This action returns a #${id} resource';
  }

  /*create(newResource: ResourcesDTO): ResourcesDTO {
    const createdResource = new this.resourcesModel(newResource);
    return createdResource.save();
  }*/

  create(newResource: ResourcesDTO): Promise<ResourcesDTO> {
    const createdResource = new this.resourcesModel(newResource);
    return createdResource.save().then((savedResource) => {
      return savedResource.toObject() as ResourcesDTO;
    });
  }

  update(): string {
    return 'This action updates a #${id} resource';
  }

  replace(): string {
    return 'This action replaces a #${id} resource';
  }

  delete(): string {
    return 'This action removes a #${id} resource';
  }
}
