import { Request, Response } from "express";
import z from "zod";
import authService from "../services/auth.service";
import bcrypt from "bcrypt";

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

    const isPasswordsValid = await bcrypt.compare(
      password,
      user?.password ?? ""
    );

    if (!isPasswordsValid) {
      return res
        .status(400)
        .send({ message: "Username or password do not match" });
    }

    if (!user?.isActive) {
      return res.status(400).send({ message: "This account is inactive!" });
    }

    const token = authService.generateToken(user._id, user.type);

    return res.status(201).send({ token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send(error.errors);
    }
  }
};

export default { login };
