import { Router } from "express";
import homeController from "./controllers/homeController.js";
import catalogController from "./controllers/catalogController.js";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use('/', homeController)

routes.use('/catalog', catalogController)

routes.use('/auth', userController)


export default routes;