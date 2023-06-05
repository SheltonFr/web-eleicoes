import mongoose from "mongoose";

export interface IVoter{
  name: string;
  bi: string;
  avatar?: string;
  user: mongoose.Types.ObjectId;
}

const VoterSchema = new mongoose.Schema<IVoter>({
  name: {
    type: "string",
    required: true,
  },
  bi: {
    type: "string",
    required: true,
    unique: true,
  },
  avatar: {
    type: "string",
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Voter = mongoose.model<IVoter>("Voter", VoterSchema);
export default Voter;
