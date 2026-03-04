import { Router } from "express";
import commentService from "../services/commentService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const commentController = Router({ mergeParams: true });

commentController.get("/", async (req, res) => {
  try {
    const comments = await commentService.getByDog(req.params.dogId);
    res.json(comments);
  } catch (err) {
    res.status(400).json({ message: getErrorMessage(err) });
  }
});

commentController.post("/", async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

  const { text } = req.body;
  const { dogId } = req.params;
  const userId = req.user._id;
  const ownerUsername = req.user.username || req.user.email;

  try {
    const comment = await commentService.create(text, dogId, userId, ownerUsername);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: getErrorMessage(err) });
  }
});

commentController.delete("/:commentId", async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

  try {
    const deleted = await commentService.delete(req.params.commentId, req.user._id);
    if (!deleted) return res.status(403).json({ message: "Not allowed" });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: getErrorMessage(err) });
  }
});

export default commentController;