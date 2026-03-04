import { Router } from "express";
import dogService from "../services/dogService.js";
import favoriteService from "../services/favoriteService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const dashboardController = Router();

dashboardController.get("/", async (req, res) => {
  if (!req.user){
    return res.status(401).json({ message: "Unauthorized" });
  } 
    
  try {
    const [myListings, myFavorites] = await Promise.all([
      dogService.getByUser(req.user._id),
      favoriteService.getByUser(req.user._id),
    ]);

    const favoriteDogs = myFavorites
      .filter((f) => f.dogId)
      .map((f) => f.dogId);

    res.json({
      username: req.user.username || req.user.email,
      email: req.user.email,
      myListings,
      myFavorites: favoriteDogs,
    });
  } catch (err) {
    res.status(400).json({ message: getErrorMessage(err) });
  }
});

export default dashboardController;