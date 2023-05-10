import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Request, Response, NextFunction } from "express";
export async function verifyAdress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const adressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const body = req.body.address;

  const adress: Address | null = await adressRepository.findOne({
    where: { street: body.street, zipCode: body.zipCode, number: body.number },
  });

  if (adress) {
    throw new AppError("Address already exists", 409);
  }
  next();
}
