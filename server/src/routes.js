import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import dogController from "./controllers/dogController.js";
import commentController from "./controllers/commentController.js";

const routes = Router();

routes.use('/', homeController)

routes.use('/petcatalog', dogController)

routes.use('/auth', userController)

routes.use("/petcatalog/:dogId/comments", commentController)


export default routes;