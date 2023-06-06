import { Types } from "mongoose";
import User, { UserType } from "../models/User";
import Jwt from "jsonwebtoken";

const findByUsername = async (username: string) =>
  User.findOne({ username: username }).select("+password");

const generateToken = (id: Types.ObjectId, type: UserType) =>
  Jwt.sign({ id: id, type: type }, process.env.SECRET_JWT, {
    expiresIn: 86400,
  }); // 24h

export default { findByUsername, generateToken };
