import { Request, Response } from "express";
import z from "zod";
import partyService from "../services/party.service";
import mongoose from "mongoose";

const PartySchema = z
  .object({
    name: z.string().nonempty(),
  })
  .strict({ message: "O nome é Obrigatório!" });

const create = async (req: Request, res: Response) => {
  try {
    const { name } = PartySchema.parse(req.body);

    const party = await partyService.create(name);

    if (!party) {
      return res
        .status(404)
        .send({ message: "An error occurred while creating Party!" });
    }

    return res.status(201).json(party);
  } catch (error) {
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
      parties: parties.map((party) => ({
        id: party._id,
        name: party.name,
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

const update = async (req: Request, res: Response) => {};

const deleteOne = async (req: Request, res: Response) => {};

export default { create, update, deleteOne, findAll, findById, findByName };
