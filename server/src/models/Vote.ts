import mongoose, { Types } from "mongoose";

export interface IVote {
  candidate: Types.ObjectId;
  voter: Types.ObjectId;
  createdAt?: Date;
}
const VoteSchema = new mongoose.Schema<IVote>({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  voter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voter",
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Vote = mongoose.model<IVote>("Vote", VoteSchema);

export default Vote;
