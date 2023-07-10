import { Injectable } from '@nestjs/common';
import { ResourcesDTO } from 'src/DTO/resources.dto';
import { ResourcesRepository } from 'src/Mongo/Repository/resources.repository';

@Injectable()
export class ResourcesService {
  constructor(private readonly resoucesRepository: ResourcesRepository) {}

  findAll(): string {
    return 'This action returns all resources';
  }

  findOne(): string {
    return 'This action returns a #${id} resource';
  }

  /*create(newResource: ResourcesDTO): ResourcesDTO {
    return this.resoucesRepository.create(newResource);
  }*/

  create(newResource: ResourcesDTO): Promise<ResourcesDTO> {
    return this.resoucesRepository.create(newResource);
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
