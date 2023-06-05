import mongoose, { Types } from "mongoose";
import { ICandidate } from "./Candidate";
import { IVoter } from "./Voter";
interface IParty {
  name: string;
  candidates: Types.DocumentArray<ICandidate>;
  voters: Types.DocumentArray<IVoter>;
}

const PartySchema = new mongoose.Schema<IParty>({
  name: {
    type: "String",
    required: true,
  },
  candidates: [{ type: Types.ObjectId, ref: "Candidate" }],
  voters: [{ type: Types.ObjectId, ref: "Voter" }],
});

const Party = mongoose.model<IParty>("Party", PartySchema);

export default Party;
