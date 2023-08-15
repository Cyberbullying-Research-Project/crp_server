// categories.model.ts

import { Schema, Document, model } from 'mongoose';

export interface Categories {
  name: string;
  description: string;
  keywords: string;
}

export type CategoriesDocument = Categories & Document;

const CategoriesSchema = new Schema<Categories>({
  name: String,
  description: String,
  keywords: String,
});

export const CategoriesModel = model<CategoriesDocument>(
  'Categories',
  CategoriesSchema,
);
