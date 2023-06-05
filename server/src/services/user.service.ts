import User, { UserType } from "../models/User";

const create = async (username: string, password: string, type: UserType) =>
  User.create({ usename: username, password: password, type: type });

export default { create };
