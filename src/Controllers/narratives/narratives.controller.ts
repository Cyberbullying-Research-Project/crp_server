import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NarrativesService } from './narratives.service';
import { CreateNarrativeDto } from './dto/create-narrative.dto';
import { Narrative } from './interfaces/narrative.interface';

@Controller('narratives')
export class NarrativesController {
  constructor(private readonly narrativesService: NarrativesService) {}

  @Get()
  findAll(): Promise<Narrative[]> {
    return this.narrativesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Narrative> {
    return this.narrativesService.findOne(id);
  }

  @Post()
  create(@Body() createNarrativeDto: CreateNarrativeDto): Promise<Narrative> {
    return this.narrativesService.create(createNarrativeDto);
  }
}
