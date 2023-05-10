import { Request, Response } from "express";
import {
  TloginRequest,
  TtokenLoginResponse,
} from "../interfaces/login.interface";
import { createLoginService } from "../services/createLoginServices";
export const loginUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: TloginRequest = req.body;
  const token: TtokenLoginResponse = await createLoginService(loginData);
  return res.status(200).json(token);
};
