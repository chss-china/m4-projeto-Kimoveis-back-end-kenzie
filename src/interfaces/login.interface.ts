import { z } from "zod";
import {
  createLoginSchema,
  createTokenResponseSchema,
} from "../schemas/login.schemas";
type TloginRequest = z.infer<typeof createLoginSchema>;

type TtokenLoginResponse = z.infer<typeof createTokenResponseSchema>;
export { TloginRequest, TtokenLoginResponse };
