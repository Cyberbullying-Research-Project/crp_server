import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Resource extends Document {
  readonly name: string;
  readonly description: string;
  readonly created_by: mongoose.Schema.Types.ObjectId;
  readonly created_at: Date;
  readonly path: string;
  readonly type: string;
  readonly size: number;
}
