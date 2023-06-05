import mongoose from "mongoose";
import bcrypt from "bcrypt";

export enum UserType {
  VOTER,
  CANDIDATE,
  ADMIN,
}
export interface IUser {
  usename: string;
  password: string;
  createdAt: Date;
  isActive: boolean;
  type: UserType;
}

const UserSchema = new mongoose.Schema<IUser>({
  usename: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    select: false,
  },

  type: {
    type: Number,
    enum: UserType,
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
