import { Router } from "express";
import { verifyBodyValid } from "../middlewares/veirfyBodyValid";
import {
  createUserSchemaRequest,
  updateUserSchemaRequest,
} from "../schemas/users.schemas";
import {
  createUserControllers,
  deleteUserControllers,
  listUsersControllers,
  updateUserControllers,
} from "../controllers/user.controlller";
import { verifyEmailMidd } from "../middlewares/verifyEmailExists";
import { verifyNotAdmin } from "../middlewares/verifyAdmin";

import { verifyTokenValidMiddGet } from "../middlewares/verifyTokenIsValidGet";
import { verifyIdMidd } from "../middlewares/verifyIdExists";
import { updateVerifyNotAdmin } from "../middlewares/veirfyAdminUpdate";
const userRoutes: Router = Router();
userRoutes.post(
  "",
  verifyBodyValid(createUserSchemaRequest),
  verifyEmailMidd,
  createUserControllers
);
userRoutes.get(
  "",
  verifyTokenValidMiddGet,
  verifyNotAdmin,
  listUsersControllers
);
userRoutes.patch(
  "/:id",
  verifyIdMidd,
  verifyBodyValid(updateUserSchemaRequest),
  verifyTokenValidMiddGet,
  updateVerifyNotAdmin,
  updateUserControllers
);
userRoutes.delete(
  "/:id",
  verifyIdMidd,
  verifyTokenValidMiddGet,
  updateVerifyNotAdmin,
  deleteUserControllers
);
export default userRoutes;
