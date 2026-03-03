import Comment from "../models/Comment.js";

const commentService = {
  getByDog(dogId) {
    return Comment.find({ dogId }).sort({ createdAt: -1 }).lean();
  },

  create(text, dogId, userId, ownerUsername) {
    return Comment.create({ text, dogId, _ownerId: userId, ownerUsername });
  },

  delete(commentId, userId) {
    return Comment.findOneAndDelete({ _id: commentId, _ownerId: userId });
  },

  getByUser(userId) {
    return Comment.find({ _ownerId: userId }).sort({ createdAt: -1 }).lean();
  },
};

export default commentService;