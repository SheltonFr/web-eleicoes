import Vote from "../models/Vote";
import { IVote } from "../models/Vote";

const create = async (vote: IVote) => Vote.create(vote);
const findAll = async () => Vote.find();
export default { create, findAll };
