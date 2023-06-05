import { Types } from "mongoose";
import Voter from "../models/Voter";

const create = async (name: string, bi: string, user: Types.ObjectId) =>
  Voter.create({ name, bi, user });

const findById = async (_id: Types.ObjectId) => Voter.findById(_id);

const findAll = async () => Voter.find().populate("user");

export default { create, findById, findAll };
