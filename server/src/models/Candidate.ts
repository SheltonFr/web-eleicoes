import mongoose, { Types } from "mongoose";
import { IVoter } from "./Voter";

export interface ICandidate {
  _id: mongoose.Types.ObjectId;
  name: string;
  avatar?: string;
  party: mongoose.Types.ObjectId;
  voters: Types.DocumentArray<IVoter>;
}

const CandidateSchema = new mongoose.Schema<ICandidate>({
  name: {
    type: "string",
    required: true,
  },
  avatar: {
    type: "string",
  },
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
  },
  voters: [{ type: Types.ObjectId, ref: "Voter" }],
});

const Candidate = mongoose.model<ICandidate>("Candidate", CandidateSchema);
export default Candidate;
