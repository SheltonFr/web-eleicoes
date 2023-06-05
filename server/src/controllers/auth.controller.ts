import { Request, Response } from "express";
import z from "zod";
import authService from "../services/auth.service";

const login = async (req: Request, res: Response) => {
  const UserSchema = z
    .object({
      username: z.string().nonempty().min(6),
      password: z.string().nonempty().min(6),
    })
    .strict();

  try {
    const { username, password } = UserSchema.parse(req.body);
    const user = await authService.findByUsername(username);
    return res.sendStatus(201);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send(error.errors);
    }
  }
};

export default { login };
