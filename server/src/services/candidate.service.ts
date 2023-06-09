import { Types } from "mongoose";
import Candidate from "../models/Candidate";

const create = async (name: string, avatar: string, party: Types.ObjectId) =>
  Candidate.create({ name, avatar, party });

const findAll = async () => Candidate.find().populate("party");

const findById = async (id: Types.ObjectId) => Candidate.findById(id);

const remove = async (id: Types.ObjectId) => Candidate.deleteOne({ _id: id });

const findByParty = async (id: Types.ObjectId) => Candidate.find({ party: id });

const setVote = async (
  voterId: Types.ObjectId,
  candidateId: Types.ObjectId
) => {
  return Candidate.findOneAndUpdate(
    { _id: candidateId },
    {
      $push: {
        voters: voterId,
      },
    }
  );
};
export default { create, findAll, findById, remove, setVote, findByParty };
