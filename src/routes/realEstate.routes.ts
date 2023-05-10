import { Router } from "express";
import {
  createRealEstateController,
  listRealEstateController,
} from "../controllers/realEsatate.controllers";
import { verifyNotAdmin } from "../middlewares/verifyAdmin";
import { verifyTokenValidMiddGet } from "../middlewares/verifyTokenIsValidGet";
import { verifyBodyValid } from "../middlewares/veirfyBodyValid";
import { createRealEstateSchemaRequest } from "../schemas/realEstate.schemas";
import { verifyAdress } from "../middlewares/veirfyUniqueAdress";
const realEstateRoutes: Router = Router();
realEstateRoutes.post(
  "",
  verifyTokenValidMiddGet,
  verifyBodyValid(createRealEstateSchemaRequest),
  verifyNotAdmin,
  verifyAdress,
  createRealEstateController
);
realEstateRoutes.get("", listRealEstateController);
export default realEstateRoutes;
