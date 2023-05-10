import { Router } from "express";
import { loginUserControllers } from "../controllers/login.controller";

const loginRoutes: Router = Router();
loginRoutes.post("", loginUserControllers);
export default loginRoutes;
