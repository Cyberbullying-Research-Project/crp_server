import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
  name: String,
  email: String,
  password: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: null,
  },
});
