import Post from "@/models/Post";
import { ConnectDB } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return;
  try {
    await ConnectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: "error in connecting to db" });
  }
  const { postId } = req.query;
  console.log(req.query);
  const DeletedPost = await Post.findByIdAndDelete(postId);

  res.status(201).json({
    status: "success",
    message: "Post successfully deleted!",
    data: DeletedPost,
  });
}
