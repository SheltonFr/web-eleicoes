import { NextFunction, Request, Response } from "express";
import mongoose, { Types } from "mongoose";

export const validId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send({ message: "Invalid id" });

  req.id = id;
  next();
};
