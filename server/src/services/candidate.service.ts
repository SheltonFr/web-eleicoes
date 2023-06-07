import { Types } from "mongoose";
import Candidate from "../models/Candidate";

const create = async (name: string, avatar: string, party: Types.ObjectId) =>
  Candidate.create({ name, avatar, party });

const findAll = async () => Candidate.find().populate("party");
export default { create, findAll };
