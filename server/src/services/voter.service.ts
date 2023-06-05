import { Types } from "mongoose";
import Voter from "../models/Voter";

const create = async (name: string, bi: string, user: Types.ObjectId) =>
  Voter.create({ name, bi, user });

export default { create };
