import mongoose from 'mongoose';
import { randomUUID } from 'crypto';
import { chatsSchema } from './chats';


const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 6
  },

  chats: [chatsSchema]
})

const User = mongoose.model("User", userSchema);

export default User;
