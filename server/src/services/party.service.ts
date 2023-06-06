import Party from "../models/Party";

const create = async (name: string) => Party.create({ name });

export default { create };
