import Vote from "../models/Vote";
import { IVote } from "../models/Vote";

const create = (vote: IVote) => Vote.create(vote);

export default { create };
