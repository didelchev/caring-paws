import { Router } from "express";
import homeController from "./controllers/homeController.js";
import dogController from "./controllers/dogController.js";

const routes = Router();

routes.use('/', homeController)

routes.use('/catalog', dogController)


export default routes;