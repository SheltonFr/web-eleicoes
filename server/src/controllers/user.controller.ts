import { Request, Response } from "express";
import z from "zod";
import userService from "../services/user.service";
import { UserType } from "../models/User";

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

    const activeUser = await userService.updateUserState(user._id, !user.isActive);

    return res.status(201).send(activeUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send({ message: error.message });
    }

    return res.status(500).send(error);
  }
};

export default { create };
