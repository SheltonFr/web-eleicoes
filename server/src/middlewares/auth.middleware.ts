import { NextFunction, Request, Response } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";
import User, { UserType } from "../models/User";
import userService from "../services/user.service";
import { error } from "console";

interface CustomJwtPayload extends JwtPayload {
  id: Types.ObjectId;
  type: UserType;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) return res.sendStatus(401);

    const [schema, token] = parts;

    if (schema !== "Bearer") return res.sendStatus(401);

    Jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err) return res.status(401).send({ message: "Invalid Token" });

      const decodedId = (decoded as CustomJwtPayload).id;
      const user = await userService.findById(decodedId);

      if (!user) return res.status(401).send({ message: "Invalid Token" });
      req.authId = user._id.toString();
      next();
    });
  } catch (error) {
    return res
      .sendStatus(500)
      .send({ message: "An error occurred! authMiddleware" });
  }
};

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) return res.sendStatus(401);

    const [schema, token] = parts;

    if (schema !== "Bearer") return res.sendStatus(401);

    Jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err) return res.status(401).send({ message: "Invalid Token" });

      const decodedId = (decoded as CustomJwtPayload).id;
      const user = await userService.findById(decodedId);

      if (!user) return res.status(401).send({ message: "Invalid Token" });

      if (user.type !== UserType.ADMIN) return res.sendStatus(401);

      req.authId = user._id.toString();
      next();
    });
  } catch (error) {
    return res
      .sendStatus(500)
      .send({ message: "An error occurred! authMiddleware" });
  }
};
