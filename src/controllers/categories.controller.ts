import { Request, Response } from "express";
import {
  Tcategories,
  TcategoriesRequest,
} from "../interfaces/categories.interface";
import { createCategoryService } from "../services/createCategoriesServices";
import { listCategorieService } from "../services/listCategoriesServices";
import { listCategorieRealEstateService } from "../services/listCategoriesRealEstate.services";
import {
  TrealEstateRequest,
  TrealEstateResponse,
} from "../interfaces/realEstate.interface";
import { Category } from "../entities";
export const createCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TcategoriesRequest = req.body;
  const newUser: Tcategories = await createCategoryService(userData);
  return res.status(201).json(newUser);
};
export const listCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listCategory: Tcategories[] = await listCategorieService();
  return res.status(200).json(listCategory);
};
export const listCategoriesControllersRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const listCategoryRealEstate: Category = await listCategorieRealEstateService(
    id
  );
  return res.status(200).json(listCategoryRealEstate);
};
