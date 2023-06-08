import { Types } from "mongoose";
import Voter from "../models/Voter";

const create = async (
  name: string,
  bi: string,
  avatar: string,
  user: Types.ObjectId
) => Voter.create({ name, bi, avatar, user });

const findById = async (_id: Types.ObjectId) =>
  Voter.findById(_id).populate("user");

const findAll = async () => Voter.find().populate("user");

export default { create, findById, findAll };
