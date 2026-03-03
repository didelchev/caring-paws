import { model, Schema, Types } from "mongoose";

const favoriteSchema = new Schema(
  {
    _ownerId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    dogId: {
      type: Types.ObjectId,
      ref: "Dog",
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate favorites
favoriteSchema.index({ _ownerId: 1, dogId: 1 }, { unique: true });

const Favorite = model("Favorite", favoriteSchema);

export default Favorite;