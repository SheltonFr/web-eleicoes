import { Request, Response } from "express";
import z from "zod";
import partyService from "../services/party.service";

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

const findById = async (req: Request, res: Response) => {};

const findAll = async (req: Request, res: Response) => {};

const findByName = async (req: Request, res: Response) => {};

const update = async (req: Request, res: Response) => {};

const deleteOne = async (req: Request, res: Response) => {};

export default { create, update, deleteOne, findAll, findById, findByName };
