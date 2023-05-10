import { User } from "../entities";
import { TuserRequest, TuserResponse } from "../interfaces/users.interface";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { createUserSchemaResponse } from "../schemas/users.schemas";
export const createUserService = async (
  userData: TuserRequest
): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User = userRepository.create(userData);
  await userRepository.save(user);
  const returnUser: TuserResponse = createUserSchemaResponse.parse(user);
  return returnUser;
};
