import { Types } from "mongoose";
import Party from "../models/Party";

const create = async (name: string, description: string) =>
  Party.create({ name, description });

const findAll = async () => Party.find();

const findById = async (id: Types.ObjectId) => Party.findById(id);

const findByName = async (name: string) => Party.findOne({ name });

const update = async (id: Types.ObjectId, name: string) =>
  Party.findOneAndUpdate({ _id: id }, { name: name });

const deleteOne = async (id: Types.ObjectId) => Party.findByIdAndDelete(id);

const setCandidate = async (
  userId: Types.ObjectId,
  partyId: Types.ObjectId
) => {
  return Party.findOneAndUpdate(
    { _id: partyId },
    {
      $push: {
        candidates: userId,
      },
    }
  );
};


export default {
  create,
  findAll,
  findById,
  findByName,
  update,
  deleteOne,
  setCandidate,
};
