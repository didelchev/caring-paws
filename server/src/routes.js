import { Router } from "express";
import homeController from "./controllers/homeController.js";
import catalogController from "./controllers/catalogController.js";

const routes = Router();

routes.use('/', homeController)

routes.use('/catalog', catalogController)


export default routes;