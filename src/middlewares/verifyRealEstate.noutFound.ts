import { Request, Response, NextFunction } from "express";
import { RealEstate } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export async function verifyIdMiddRealEstateBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.body.realEstateId;
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  let realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: { id: id },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  next();
}
