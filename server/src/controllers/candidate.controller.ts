import { Request, Response } from "express";
import z from "zod";
import candidateService from "../services/candidate.service";
import mongoose from "mongoose";
import partyService from "../services/party.service";

const creationSchema = z.object({
  name: z.string().nonempty(),
  avatar: z.string(),
  party: z.string(),
});

const create = async (req: Request, res: Response) => {
  console.log("Rota de criaca de candidato");
  try {
    const { avatar, name, party } = creationSchema.parse(req.body);

    const partyId = new mongoose.Types.ObjectId(party);

    const candidateParty = await partyService.findById(partyId);

    if (!candidateParty) {
      return res.status(404).send({ message: "Party not found!" });
    }

    const candidate = await candidateService.create(name, avatar, partyId);

    if (!candidate) {
      return res
        .status(404)
        .send({ message: "An error occured while creating Candidate!" });
    }

    await partyService.setCandidate(candidate._id, candidateParty._id);

    return res.status(201).send(candidate);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
      return res.status(400).send({ message: `Zod Error: ${error.issues}` });
    }

    if (error instanceof mongoose.Error) {
      return res
        .status(404)
        .send({ message: `Mongoose Error: ${error.message}` });
    }

    return res.status(500).send({
      message: `Server error on Create Candidate Controller: ${error}`,
    });
  }
};
const findAll = async (req: Request, res: Response) => {
  try {
    const candidates = await candidateService.findAll();

    return res.status(200).send({
      result: candidates.map((candidate) => ({
        id: candidate._id,
        name: candidate.name,
        avatar: candidate.avatar,
        party: candidate.party,
        votes: candidate.voters,
      })),
    });
  } catch (error) {
    if (error instanceof mongoose.Error) {
      return res.status(404).send(error.message);
    }

    return res.status(500).send({
      message: `Server error on Create Candidate Controller: ${error}`,
    });
  }
};
const findById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const objectId = new mongoose.Types.ObjectId(id);

    const candidate = await candidateService.findById(objectId);

    if (!candidate) {
      return res.status(404).send({ message: "Candidate not found" });
    }

    return res.status(200).send(candidate);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const findByParty = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const objectId = new mongoose.Types.ObjectId(id);

    const candidates = await candidateService.findByParty(objectId);

    return res.status(200).send({
      result: candidates.map((candidate) => ({
        id: candidate._id,
        name: candidate.name,
        avatar: candidate.avatar,
        party: candidate.party,
      })),
    });
  } catch (error) {
    if (error instanceof mongoose.Error) {
      return res.status(404).send(error.message);
    }

    return res.status(500).send({
      message: `Server error on Create Candidate Controller: ${error}`,
    });
  }
};

export default { create, findById, findAll };
