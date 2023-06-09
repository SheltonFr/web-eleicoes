declare namespace Express {
  import { Types } from "mongoose";
  export interface Request {
    authId?: string;
    id?: string;
  }
}
