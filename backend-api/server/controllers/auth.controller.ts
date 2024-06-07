import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import { errorHandlerFunc } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ name, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created !");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const CheckUser = await User.findOne({ email: email });
    if (!CheckUser) return next(errorHandlerFunc(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, CheckUser.password);
    if (!validPassword)
      return next(errorHandlerFunc(401, "Incorrect login information!"));

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return next(errorHandlerFunc(500, "JWT secret not defined in environment variables."));
    }

    const token = jwt.sign({ id: CheckUser._id }, JWT_SECRET); //created the token

    const { password: hashedPassword, ...rest } = CheckUser.toObject(); // returning everything except the password

    // save the access token as Cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req: Request, res: Response, next: NextFunction) => {
  // try {
  //   const user = await User.findOne({ email: req.body.email });
  //   if (user) {
  //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  //     const { password: pass, ...rest } = user._doc;
  //     res
  //       .cookie("access_token", token, { httpOnly: true })
  //       .status(200)
  //       .json(rest);
  //   } else {
  //     const generatedPassword =
  //       Math.random().toString(36).slice(-8) +
  //       Math.random().toString(36).slice(-8);
  //     const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
  //     const newUser = new User({
  //       username:
  //         req.body.name.split(" ").join("").toLowerCase() +
  //         Math.random().toString(36).slice(-4),
  //       email: req.body.email,
  //       password: hashedPassword,
  //       avatar: req.body.photo,
  //     });
  //     await newUser.save();
  //     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  //     const { password: pass, ...rest } = newUser._doc;
  //     res
  //       .cookie("access_token", token, { httpOnly: true })
  //       .status(200)
  //       .json(rest);
  //   }
  // } catch (error) {
  //   next(error);
  // }
};
export const signOut = async (req: Request, res: Response, next: NextFunction) => {
  // try {
  //   res.clearCookie('access_token');
  //   res.status(200).json('User has been logged out!');
  // } catch (error) {
  //   next(error);
  // }
};