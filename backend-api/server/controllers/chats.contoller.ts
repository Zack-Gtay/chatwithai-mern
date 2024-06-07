import { NextFunction, Request, Response } from 'express';
import User from "../models/user.js";


export const getAllChats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find().select('chats');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addChat = async (req: Request, res: Response) => {
  const { userId, role, content } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.chats.push({ role, content });
    await user.save();
    res.status(201).json({ message: 'Chat added successfully' });
  } catch (error) {
    console.error('Error adding chat:', error);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
};
