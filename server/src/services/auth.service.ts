import { Types } from "mongoose";
import User from "../models/User";
import Jwt from "jsonwebtoken";

const findByUsername = async (username: string) =>
  User.findOne({ usename: username }).select("+password");

const generateToken = (id: Types.ObjectId) =>
  Jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 }); // 24h

export default { findByUsername, generateToken };
