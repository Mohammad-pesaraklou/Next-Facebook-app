import Post from "@/models/Post";
import { ConnectDB } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  try {
    await ConnectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: "error in connecting to db" });
  }

  const { author, image, message } = req.body.obj;

  if (!author || !message) {
    return res
      .status(422)
      .json({ status: "failure", message: "Invalid Data!" });
  }

  const newPost = await Post.create({ author, image, message });

  res.status(201).json({ status: "success", data: newPost });
}
