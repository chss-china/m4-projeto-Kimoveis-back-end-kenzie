import { DeepPartial } from "typeorm";
import {
  createUserSchema,
  createUserSchemaRequest,
  createUserSchemaResponse,
  updateUserSchemaRequest,
} from "../schemas/users.schemas";
import { z } from "zod";
type TuserRequest = z.infer<typeof createUserSchemaRequest>;
type TuserResponse = z.infer<typeof createUserSchemaResponse>;
type Tuser = z.infer<typeof createUserSchema>;
type TuserUpdateRequest = DeepPartial<TuserRequest>;
//type TuserUpdateRequestPartial = DeepPartial<TuserUpdateRequest>;
export {
  TuserRequest,
  TuserResponse,
  Tuser,
  TuserUpdateRequest,
  // TuserUpdateRequestPartial,
};
