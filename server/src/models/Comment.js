import { model, Schema, Types } from "mongoose";

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Comment text is required!"],
      maxLength: [500, "Comment cannot exceed 500 characters"],
    },
    _ownerId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    ownerUsername: {
      type: String,
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

const Comment = model("Comment", commentSchema);

export default Comment;