import mongoose, { Types } from "mongoose";
import { ICandidate } from "./Candidate";
import { IVoter } from "./Voter";
interface IParty {
  name: string;
  description: string;
  candidates: Types.DocumentArray<ICandidate>;
  voters: Types.DocumentArray<IVoter>;
  createdAt: Date;
}

const PartySchema = new mongoose.Schema<IParty>({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  description: {
    type: "String",	
    required: false
  },
  candidates: [{ type: Types.ObjectId, ref: "Candidate" }],
  voters: [{ type: Types.ObjectId, ref: "Voter" }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Party = mongoose.model<IParty>("Party", PartySchema);

export default Party;
