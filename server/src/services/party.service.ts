import { Types } from "mongoose";
import Party from "../models/Party";

const create = async (name: string) => Party.create({ name });

const findAll = async () => Party.find();

const findById = async (id: Types.ObjectId) => Party.findById(id);

const findByName = async (name: string) => Party.findOne({ name });

const update = async (id: Types.ObjectId, name: string) =>
  Party.findOneAndUpdate({ _id: id }, { name: name });

export default { create, findAll, findById, findByName, update };
