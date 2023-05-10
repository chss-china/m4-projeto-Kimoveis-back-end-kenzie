import { Router } from "express";
import {
  createCategoriesControllers,
  listCategoriesControllers,
  listCategoriesControllersRealEstate,
} from "../controllers/categories.controller";
import { verifyBodyValid } from "../middlewares/veirfyBodyValid";
import { createCategoriesSchemaRequest } from "../schemas/categories.schemas";
import { verifyTokenValidMiddGet } from "../middlewares/verifyTokenIsValidGet";
import { verifyNotAdmin } from "../middlewares/verifyAdmin";
import { verifyNamelMiddCategory } from "../middlewares/verifyCategoriesnameExists";
import { listCategorieService } from "../services/listCategoriesServices";
import { verifyIdlMiddCategory } from "../middlewares/verifyCategory.notfound.midd";
const categoriesRoutes: Router = Router();
categoriesRoutes.post(
  "",
  verifyBodyValid(createCategoriesSchemaRequest),
  verifyTokenValidMiddGet,
  verifyNotAdmin,
  verifyNamelMiddCategory,
  createCategoriesControllers
);
categoriesRoutes.get("", listCategoriesControllers);
categoriesRoutes.get(
  "/:id/realEstate",
  verifyIdlMiddCategory,
  listCategoriesControllersRealEstate
);
export default categoriesRoutes;
