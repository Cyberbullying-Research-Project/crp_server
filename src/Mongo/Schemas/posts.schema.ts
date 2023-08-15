// posts.model.ts

import { Schema, Document, model } from 'mongoose';

export interface Posts {
  title: string;
  body: string;
  user_id: number;
  status: string;
  created_at: Date;
  resources: number;
}

export type PostsDocument = Posts & Document;

const PostsSchema = new Schema<Posts>({
  title: String,
  body: String,
  user_id: Number,
  status: String,
  created_at: { type: Date, default: Date.now },
  resources: Number,
});

export const PostsModel = model<PostsDocument>('Posts', PostsSchema);
