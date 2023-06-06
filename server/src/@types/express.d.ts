declare namespace Express {
  import { Types } from "mongoose";
  export interface Request {
    authId?: Types.ObjectId;
    id?: string;
  }
}
