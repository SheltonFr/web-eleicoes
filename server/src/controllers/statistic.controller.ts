import { Request, Response } from "express";
import candidateService from "../services/candidate.service";
import partyService from "../services/party.service";
import voterService from "../services/voter.service";
import voteService from "../services/vote.service";

const getStatistics = async (req: Request, res: Response) => {
  try {
    const candidates = await candidateService.getStatistics();
    const parties = await partyService.findAll();
    const voters = await voterService.findAll();
    const votes = await voteService.findAll();

    console.log(candidates);
    return res.status(200).send({
      statistics: {
        candidatesCount: candidates.length,
        votersCount: voters.length,
        votesCount: votes.length,
        partiesCount: parties.length,

        votes: {
          candidates: candidates.map((candidate) => ({
            name: candidate.name,
            amout: candidate.total,
          })),

          winner: candidates[0],
        },
      },
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error while getting statistics!: " });
  }
};

export default { getStatistics };
