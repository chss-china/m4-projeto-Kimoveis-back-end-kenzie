import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";

export const listScheduleRealEstateService = async (
  id: number
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const scheduleRealEstate: RealEstate | null =
    await realEstateRepository.findOne({
      where: { id: id },
      relations: {
        schedules: {
          user: true,
        },
        category: true,
        address: true,
      },
    });

  return scheduleRealEstate!;
};
