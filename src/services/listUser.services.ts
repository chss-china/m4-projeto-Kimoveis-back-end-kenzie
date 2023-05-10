import { TuserResponse } from "../interfaces/users.interface";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import {
  allUserSchemaResponseGet,
  createUserSchemaResponse,
} from "../schemas/users.schemas";

export const listUserService = async (): Promise<TuserResponse[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const usersResponse = allUserSchemaResponseGet.parse(users);

  return usersResponse;
};
