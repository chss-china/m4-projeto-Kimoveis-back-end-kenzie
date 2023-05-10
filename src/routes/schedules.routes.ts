import { Router } from "express";
import { verifyTokenValidMiddGet } from "../middlewares/verifyTokenIsValidGet";
import { verifyBodyValid } from "../middlewares/veirfyBodyValid";
import { scheduleSchemasRequest } from "../schemas/schedules.schemas";
import {
  createScheduleController,
  listScheduleRealEstateController,
} from "../controllers/schedules.controller";
import { verifyNotAdmin } from "../middlewares/verifyAdmin";
import { verifyTokenValidMidd } from "../middlewares/verifyTokenIsValid";
import { verifyIdMiddRealEstate } from "../middlewares/verifyRealEstate.midd";
import { verifyUserScheduleDateHour } from "../middlewares/veirfyScheduleshourDate.midd";
import { verifyRealEstateScheduleDateHour } from "../middlewares/veirfySchedulesHourDateNotUser";
import { verifyHour } from "../middlewares/veirifyHourSchedules";
import { verifyDateAvailable } from "../middlewares/verifyDateAvailable";
import { verifyIdMiddRealEstateBody } from "../middlewares/verifyRealEstate.noutFound";
const schedulesRoutes: Router = Router();
schedulesRoutes.post(
  "",
  verifyTokenValidMiddGet,
  verifyBodyValid(scheduleSchemasRequest),
  verifyIdMiddRealEstateBody,
  verifyUserScheduleDateHour,
  verifyRealEstateScheduleDateHour,
  verifyHour,
  verifyDateAvailable,
  createScheduleController
);
schedulesRoutes.get(
  "/realEstate/:id",
  verifyTokenValidMiddGet,
  verifyNotAdmin,
  verifyIdMiddRealEstate,
  listScheduleRealEstateController
);
export default schedulesRoutes;
