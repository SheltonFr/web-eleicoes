import { Types } from "mongoose";
import User, { UserType } from "../models/User";

const create = async (username: string, password: string, type: UserType) =>
  User.create({ usename: username, password: password, type: type });

const findById = async (_id: Types.ObjectId) => User.findById(_id);

const updateUserState = async (_id: Types.ObjectId, isActive: boolean) =>
  User.findOneAndUpdate({ _id }, { isActive });
export default { create, findById, updateUserState };
