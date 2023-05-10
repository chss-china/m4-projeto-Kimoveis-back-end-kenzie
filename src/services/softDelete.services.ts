import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

export const deleteUserService = async (id: number): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const item = await userRepository.findOneOrFail({
    where: { id },
  });
  await userRepository.softRemove(item);

  return item;
};
