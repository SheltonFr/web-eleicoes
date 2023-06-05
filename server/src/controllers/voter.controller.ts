import { Request, Response } from "express";
import z from "zod";
import userService from "../services/user.service";
import { UserType } from "../models/User";
import voterService from "../services/voter.service";

const creationSchema = z
  .object({
    username: z.string().nonempty().min(6),
    password: z.string().nonempty().min(6),
    name: z.string().nonempty(),
    bi: z.string().nonempty(),
  })
  .strict();

const create = async (req: Request, res: Response) => {
  try {
    const { bi, name, password, username } = creationSchema.parse(req.body);

    const user = await userService.create(username, password, UserType.VOTER);
    const voter = await voterService.create(name, bi, user._id);
    return res.status(201).send(voter);
  } catch (error) {
    return res.status(500).send({ message: `Service error: ${error}` });
  }
};

export default { create };
