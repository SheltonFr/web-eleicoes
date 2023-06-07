import { Request, Response } from "express";
import z from "zod";
import userService from "../services/user.service";
import { UserType } from "../models/User";
import mongoose from "mongoose";

const UserSchema = z.object({
  username: z.string().min(6).nonempty(),
  password: z.string().min(6).nonempty(),
});

const create = async (req: Request, res: Response) => {
  try {
    const { username, password } = UserSchema.parse(req.body);

    const user = await userService.create(username, password, UserType.ADMIN);
    if (!user) {
      return res
        .status(400)
        .send({ message: "An error occurred while creating User" });
    }

    const activeUser = await userService.updateUserState(
      user._id,
      !user.isActive
    );

    return res.status(201).send(activeUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send({ message: error.message });
    }

    return res.status(500).send(error);
  }
};

const findAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAll();

    return res.status(200).send({
      users: users.map((user) => ({
        id: user._id,
        username: user.username,
        isActive: user.isActive,
        type: user.type,
      })),
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const object = new mongoose.Types.ObjectId(id)
    
  } catch (error) {
    
  }
}

export default { create, findAll };
