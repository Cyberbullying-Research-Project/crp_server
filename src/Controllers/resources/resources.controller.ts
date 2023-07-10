import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

import { ResourcesDTO } from '../../DTO/resources.dto';
import { ResourcesService } from '../../Services/resources/resources.service';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Post()
  create(@Body() newResource: ResourcesDTO): Promise<ResourcesDTO> {
    return this.resourcesService.create(newResource);
  }

  @Get()
  findAll(): string {
    return 'This action returns all resources';
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} resource';
  }

  @Patch(':id')
  update(): string {
    return 'This action updates a #${id} resource';
  }

  @Put(':id')
  replace(): string {
    return 'This action replaces a #${id} resource';
  }

  @Delete(':id')
  delete(): string {
    return 'This action removes a #${id} resource';
  }
}
