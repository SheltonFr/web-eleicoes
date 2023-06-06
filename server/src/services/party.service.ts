import Party from "../models/Party";

const create = async (name: string) => Party.create({ name });

const findAll = async () => Party.find();

export default { create, findAll };
