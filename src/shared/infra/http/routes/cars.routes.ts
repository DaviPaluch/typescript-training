// user.routes.ts
import { Router } from "express";
import { CreateCarController } from "@modules/car/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const carRoutes = Router();

const createCarController = new CreateCarController()

carRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle)

export { carRoutes }