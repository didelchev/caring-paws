import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import dogController from "./controllers/dogController.js";

const routes = Router();

routes.use('/', homeController)

routes.use('/petcatalog', dogController)

routes.use('/auth', userController)


export default routes;