import { Router } from "express";
import { mainController } from "../controllers/main";

const mainRoutes = Router();

mainRoutes.get("/car/:id", mainController.getCar);

mainRoutes.get("/listing/:id", mainController.getListing);

mainRoutes.get("/user/:id", mainController.getUser);

export default mainRoutes;