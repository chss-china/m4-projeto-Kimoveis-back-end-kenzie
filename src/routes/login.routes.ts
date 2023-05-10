import { Router } from "express";
import { loginUserControllers } from "../controllers/login.controller";
import { verifyTokenValidMidd } from "../middlewares/verifyTokenIsValid";
const loginRoutes: Router = Router();
loginRoutes.post("", loginUserControllers);
export default loginRoutes;
