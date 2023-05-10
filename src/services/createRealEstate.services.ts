import { Repository } from "typeorm";
import {
  TrealEstateRequest,
  TrealEstateResponse,
} from "../interfaces/realEstate.interface";
import { Address, Category, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";

import { AppError } from "../error";

export const createRealEstateService = async (
  realEstateData: TrealEstateRequest
): Promise<TrealEstateResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const adressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  let adress: Address = adressRepository.create(
    realEstateData.address as Address
  );
  await adressRepository.save(adress);
  const category: Category | null = await categoryRepository.findOne({
    where: { id: realEstateData.categoryId },
  });
  if (!category) {
    throw new AppError("category not found", 404);
  }
  const obj = {
    ...realEstateData,
    address: adress,
    category: category,
  };

  const realEstate: RealEstate = realEstateRepository.create(obj);

  await realEstateRepository.save(realEstate);

  return realEstate;
};
