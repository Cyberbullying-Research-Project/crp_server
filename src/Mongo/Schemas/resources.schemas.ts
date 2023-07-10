import { Schema } from 'mongoose';

export const ResourcesSchema = new Schema({
  name: String,
  description: String,
  created_by: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  path: String,
  type: String,
  size: Number,
});
