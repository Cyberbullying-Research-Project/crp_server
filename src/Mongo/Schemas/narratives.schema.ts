// narratives.model.ts

import { Schema, Document, model } from 'mongoose';

export interface Narratives {
  title: string;
  body: string;
  user_id: number;
  status: string;
  created_at: Date;
  posts: number[];
  category: number;
}

export type NarrativesDocument = Narratives & Document;

const NarrativesSchema = new Schema<Narratives>({
  title: String,
  body: String,
  user_id: Number,
  status: String,
  created_at: { type: Date, default: Date.now },
  posts: [Number],
  category: Number,
});

export const NarrativesModel = model<NarrativesDocument>(
  'Narratives',
  NarrativesSchema,
);
