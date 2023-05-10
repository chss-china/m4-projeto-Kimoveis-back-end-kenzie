import { z } from "zod";
import {
  createRealEstateSchema,
  createRealEstateSchemaCategories,
  createRealEstateSchemaRequest,
  createRealEstateSchemaResponse,
} from "../schemas/realEstate.schemas";
import { createCategoriesSchemaRequest } from "../schemas/categories.schemas";
type TrealEstateRequest = z.infer<typeof createRealEstateSchemaRequest>;
//type TrealEstateResponse = z.infer<typeof createRealEstateSchema>;
type TrealEstateCategory = z.infer<typeof createRealEstateSchemaCategories>;
type TrealEstateResponse = z.infer<typeof createRealEstateSchemaResponse>;
export { TrealEstateRequest, TrealEstateResponse, TrealEstateCategory };
///type
