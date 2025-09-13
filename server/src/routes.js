import { Router } from "express";
import homeController from "./controllers/homeController.js";
import catalogController from "./controllers/catalogController.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use('/', homeController)

routes.use('/catalog', catalogController)

routes.use('/auth', authController)


export default routes;