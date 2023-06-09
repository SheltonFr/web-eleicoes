import { Request, Response } from "express";
import z from "zod";
import userService from "../services/user.service";
import { UserType } from "../models/User";
import voterService from "../services/voter.service";
import mongoose, { Types } from "mongoose";

const creationSchema = z
  .object({
    username: z.string().nonempty().min(6),
    password: z.string().nonempty().min(6),
    name: z.string().nonempty(),
    avatar: z.string().url().nonempty(),
    bi: z.string().nonempty(),
  })
  .strict();

const create = async (req: Request, res: Response) => {
  try {
    const { bi, name, password, username, avatar } = creationSchema.parse(
      req.body
    );

    const user = await userService.create(username, password, UserType.VOTER);
    const voter = await voterService.create(name, bi, avatar, user._id);
    return res.status(201).send(voter);
  } catch (error) {
    return res.status(500).send({ message: `Service error: ${error}` });
  }
};

const toggleActiveState = async (req: Request, res: Response) => {
  const id = req.id;

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const voter = await voterService.findById(objectId._id);

    if (!voter) {
      return res.status(404).send({ message: "Voter not found" });
    }

    const user = await userService.findById(voter.user);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    await userService.updateUserState(user._id, !user.isActive);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const findById = async (req: Request, res: Response) => {
  const id = req.id;

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const voter = await voterService.findById(objectId._id);

    if (!voter) {
      return res.status(404).send({ message: "Voter not found" });
    }

    return res.status(200).send(voter);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const findAll = async (req: Request, res: Response) => {
  try {
    const voters = await voterService.findAll();
    return res.status(200).send({
      result: voters.map((voter) => ({
        id: voter._id,
        name: voter.name,
        bi: voter.bi,
        user: voter.user,
        avatar: voter.avatar,
      })),
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};


export default { create, toggleActiveState, findAll, findById };
