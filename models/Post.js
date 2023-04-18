import { model, models, Schema } from "mongoose";

const postSchema = Schema({
  author: String,
  message: {
    type: String,
    maxLength: 500,
  },
  image: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Post = models.Post || model("Post", postSchema);

export default Post;
