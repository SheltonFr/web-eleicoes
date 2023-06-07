import { Request, Response } from "express";
import z from "zod";
import partyService from "../services/party.service";
import mongoose from "mongoose";

const PartySchema = z
  .object({
    name: z
      .string()
      .nonempty(),
    description: z.string(),
  })
  .strict({ message: "O nome é Obrigatório!" });

const create = async (req: Request, res: Response) => {
  try {
    const { name, description } = PartySchema.parse(req.body);

    const party = await partyService.create(name, description);

    if (!party) {
      return res
        .status(404)
        .send({ message: "An error occurred while creating Party!" });
    }

    return res.status(201).json(party);
  } catch (error) {
    if (error instanceof mongoose.MongooseError) {
      console.log(error.message);
      return res.status(400).send({ message: error.message });
    }

    if (error instanceof z.ZodError) {
      console.log(error.message);
      return res.status(400).send(error.issues);
    }
    return res
      .status(500)
      .send({ message: `Creat Party Controller: ${error}` });
  }
};

const findById = async (req: Request, res: Response) => {
  const id = req.id;

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const party = await partyService.findById(objectId);

    if (!party) {
      return res.status(404).send({ message: "No party found" });
    }

    return res.status(200).send({ party });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Find Party by Id Controller: ${error}` });
  }
};

const findAll = async (req: Request, res: Response) => {
  try {
    const parties = await partyService.findAll();

    return res.status(200).send({
      result: parties.map((party) => ({
        id: party._id,
        name: party.name,
        description: party.description,
        candidates: party.candidates,
        createdAt: party.createdAt,
      })),
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Find All Parties Controller: ${error}` });
  }
};

const findByName = async (req: Request, res: Response) => {
  const name = req.query.name;

  try {
    const party = await partyService.findByName(name?.toString() ?? "");

    if (!party) {
      return res.status(404).send({ message: "No party Found" });
    }
    return res.status(200).send({ party });
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Find Party by Name Controller: ${error}` });
  }
  return res.send(name);
};

const update = async (req: Request, res: Response) => {
  const id = req.id;

  try {
    const { name } = PartySchema.parse(req.body);

    const objectId = new mongoose.Types.ObjectId(id);
    const party = await partyService.findById(objectId);

    if (!party) {
      return res.status(404).send({ message: "No party found" });
    }

    await partyService.update(party._id, name);
    const updatedParty = await partyService.findById(objectId);

    return res.status(200).send({ party: updatedParty });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send(error.issues);
    }

    return res
      .status(500)
      .send({ message: `Update Party Controller: ${error}` });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  const id = req.id;
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const party = await partyService.findById(objectId);

    if (!party) {
      return res.status(404).send({ message: "No party found" });
    }

    await partyService.deleteOne(party._id);

    return res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .send({ message: `Creat Party Controller: ${error}` });
  }
};

export default { create, update, deleteOne, findAll, findById, findByName };
