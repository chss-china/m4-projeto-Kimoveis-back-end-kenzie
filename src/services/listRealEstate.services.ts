import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";

export const listRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const RealEstateList: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return RealEstateList!;
};
