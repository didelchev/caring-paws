import { Router } from "express";
import favoriteService from "../services/favoriteService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const favoriteController = Router({ mergeParams: true });

// POST /petcatalog/:dogId/favorite  — toggle favorite
favoriteController.post("/", async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

  try {
    const result = await favoriteService.toggle(req.params.dogId, req.user._id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: getErrorMessage(err) });
  }
});

// GET /petcatalog/:dogId/favorite  — check if current user favorited this dog
favoriteController.get("/", async (req, res) => {
  if (!req.user) return res.json({ favorited: false });

  try {
    const favorited = await favoriteService.isFavorited(req.params.dogId, req.user._id);
    const count = await favoriteService.countByDog(req.params.dogId);
    res.json({ favorited, count });
  } catch (err) {
    res.status(400).json({ message: getErrorMessage(err) });
  }
});

export default favoriteController;