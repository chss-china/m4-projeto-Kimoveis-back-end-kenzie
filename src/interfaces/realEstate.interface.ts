import { z } from "zod";
import {
  createRealEstateSchemaCategories,
  createRealEstateSchemaRequest,
  createRealEstateSchemaResponse,
} from "../schemas/realEstate.schemas";

type TrealEstateRequest = z.infer<typeof createRealEstateSchemaRequest>;

type TrealEstateCategory = z.infer<typeof createRealEstateSchemaCategories>;
type TrealEstateResponse = z.infer<typeof createRealEstateSchemaResponse>;
export { TrealEstateRequest, TrealEstateResponse, TrealEstateCategory };
