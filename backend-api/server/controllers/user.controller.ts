import User from "../models/user.js";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "works!", users });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "error fetching users!" });
  }
};

