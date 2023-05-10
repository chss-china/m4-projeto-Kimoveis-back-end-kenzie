import { Repository } from "typeorm";
import {
  TuserResponse,
  TuserUpdateRequest,
} from "../interfaces/users.interface";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { createUserSchemaResponse } from "../schemas/users.schemas";

export const updateUserService = async (
  userData: TuserUpdateRequest,
  userid: number
): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userid,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);

  const returnUser: TuserResponse = createUserSchemaResponse.parse(newUserData);

  return returnUser;
};
