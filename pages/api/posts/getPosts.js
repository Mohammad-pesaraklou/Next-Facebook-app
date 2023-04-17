import Post from "@/models/Post";
import { ConnectDB } from "@/utils/auth";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "GET") return;
  try {
    await ConnectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: "error in connecting to db" });
  }
  const session = await getSession({ req });

  const posts = await Post.find({ author: session?.user?.name });

  res.status(200).json({ status: "success", data: posts });
}
