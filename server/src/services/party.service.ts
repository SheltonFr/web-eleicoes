import { Types } from "mongoose";
import Party from "../models/Party";

const create = async (name: string) => Party.create({ name });

const findAll = async () => Party.find();

const findById = async (id: Types.ObjectId) => Party.findById(id);

export default { create, findAll, findById };
