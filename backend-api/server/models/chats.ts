import mongoose from 'mongoose';
import { randomUUID } from 'crypto';

export const chatsSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID()
  },
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
})