import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import dogController from "./controllers/dogController.js";
import commentController from "./controllers/commentController.js";
import favoriteController from "./controllers/favoriteController.js";
import dashboardController from "./controllers/dashboardController.js";

const routes = Router();

routes.use("/", homeController);
routes.use("/petcatalog", dogController);
routes.use("/auth", userController);

// Nested routes for comments and favorites per dog
routes.use("/petcatalog/:dogId/comments", commentController);
routes.use("/petcatalog/:dogId/favorite", favoriteController);

// Dashboard
routes.use("/dashboard", dashboardController);

export default routes;