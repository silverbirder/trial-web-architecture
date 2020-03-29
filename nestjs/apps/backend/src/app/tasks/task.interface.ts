import { Document } from 'mongoose';

export interface Task extends Document {
  readonly _id: number
  title: string;
  complete: boolean;
}
