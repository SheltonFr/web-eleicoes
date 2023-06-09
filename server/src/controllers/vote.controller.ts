import { Request, Response } from "express";
import voteService from "../services/vote.service";
import mongoose, { MongooseError, mongo } from "mongoose";
import candidateService from "../services/candidate.service";
import voterService from "../services/voter.service";

const voteCandidate = async (req: Request, res: Response) => {
  const candidateId = req.params.id;
  const voterId = req.authId;

  try {
    const candidateParsedId = new mongoose.Types.ObjectId(candidateId);
    const voterParsedId = new mongoose.Types.ObjectId(voterId);

    const candidate = await candidateService.findById(candidateParsedId);
    const voter = await voterService.findByUser(voterParsedId);

    if (!candidate || !voter) {
      return res.status(404).send({ message: "Candidate or Voter not found" });
    }

    if (voter.voted) {
      return res.status(400).send({ message: "Voter already voted" });
    }

    const vote = await voteService.create({
      candidate: candidate._id,
      voter: voter._id,
    });

    await candidateService.setVote(voter._id, candidate._id);
    await voterService.updateVotedState(voter._id, true);

    return res.send(vote);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default { voteCandidate };
