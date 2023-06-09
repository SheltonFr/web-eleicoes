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

const findByUser = async (userId: Types.ObjectId) =>
  Voter.findOne({ user: userId }).populate("user");
const findAll = async () => Voter.find().populate("user");

const updateVotedState = async (_id: Types.ObjectId, voted: boolean) =>
  Voter.updateOne({ _id }, { voted });

export default { create, findById, findAll, findByUser, updateVotedState };
