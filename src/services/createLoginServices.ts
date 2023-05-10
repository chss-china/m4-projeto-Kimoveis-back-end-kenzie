import { Repository } from "typeorm";
import {
  TloginRequest,
  TtokenLoginResponse,
} from "../interfaces/login.interface";
import { TuserResponse } from "../interfaces/users.interface";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import "dotenv/config";
export const createLoginService = async (
  loginData: TloginRequest
): Promise<TtokenLoginResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }
  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }
  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    String(process.env.SECRET_KEY!),
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );
  return { token };
};
