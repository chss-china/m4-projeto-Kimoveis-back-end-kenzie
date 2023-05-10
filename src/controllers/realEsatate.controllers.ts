import {
  TrealEstateRequest,
  TrealEstateResponse,
} from "../interfaces/realEstate.interface";
import { Request, Response } from "express";
import { createRealEstateService } from "../services/createRealEstate.services";
import { listRealEstateService } from "../services/listRealEstate.services";
import { RealEstate } from "../entities";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstaterData: TrealEstateRequest = req.body;

  const newRealEstate: TrealEstateResponse = await createRealEstateService(
    realEstaterData
  );

  return res.status(201).json(newRealEstate);
};
export const listRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const list: RealEstate[] = await listRealEstateService();
  return res.status(200).json(list);
};
