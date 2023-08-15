// narratives.repository.ts

import { Injectable } from '@nestjs/common';
import { NarrativesDTO } from './narratives.dto';
import { Narratives } from './narratives.interface';

@Injectable()
export class NarrativesRepository {
  private readonly narratives: Narratives[] = [];
  private currentId = 1;

  create(newNarrative: NarrativesDTO): Narratives {
    const narrative: Narratives = {
      id: this.currentId,
      ...newNarrative,
      created_at: new Date(),
      posts: [],
      category: 0, // Initialize category ID as 0; replace with actual category ID
    };
    this.narratives.push(narrative);
    this.currentId++;
    return narrative;
  }

  findAll(): Narratives[] {
    return this.narratives;
  }

  findById(id: number): Narratives {
    return this.narratives.find((narrative) => narrative.id === id);
  }

  // Implement other CRUD operations as needed
}
