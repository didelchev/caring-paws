import Favorite from "../models/Favorite.js";

const favoriteService = {
  async toggle(dogId, userId) {
    const existing = await Favorite.findOne({ dogId, _ownerId: userId });
    if (existing) {
      await Favorite.deleteOne({ _id: existing._id });
      return { favorited: false };
    } else {
      await Favorite.create({ dogId, _ownerId: userId });
      return { favorited: true };
    }
  },

  async isFavorited(dogId, userId) {
    const fav = await Favorite.findOne({ dogId, _ownerId: userId });
    return !!fav;
  },

  getByUser(userId) {
    return Favorite.find({ _ownerId: userId })
      .populate("dogId")
      .sort({ createdAt: -1 })
      .lean();
  },

  countByDog(dogId) {
    return Favorite.countDocuments({ dogId });
  },
};

export default favoriteService;