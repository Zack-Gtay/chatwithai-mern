import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { errorHandlerFunc } from "./error.js";

interface UserRequest extends Request {
  user?: any;
}

export const verifyToken = (req: UserRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandlerFunc(401, "Unauthorized"));
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    return next(errorHandlerFunc(500, "JWT secret not defined in environment variables."));
  }
  jwt.verify(token, JWT_SECRET, (err: VerifyErrors | null, user: any) => {
    if (err) return next(errorHandlerFunc(403, "Forbidden"));

    req.user = user;
    next();
  });
};
