import { Repository } from "typeorm";
import {
  TscheduleCreateResponse,
  TscheduleRequest,
} from "../interfaces/schedules.interface";
import { RealEstate, Schedule, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const createScheduleService = async (
  data: TscheduleRequest,
  userId: number
): Promise<TscheduleCreateResponse> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  let realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: { id: data.realEstateId },
  });

  const user: User | null = await userRepository.findOne({
    where: { id: userId },
  });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const obj = {
    ...data,
    realEstate: realEstate,
    user: user!,
  };

  const schedule: Schedule = scheduleRepository.create(obj);

  await scheduleRepository.save(schedule);

  return {
    message: "Schedule created",
  };
};
