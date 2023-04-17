import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Posts = () => {
  const [Data, setData] = useState([]);
  const { data } = useSession();

  const GetData = async () => {
    const req = await axios("api/posts/getPosts");
    setData(req.data.data);
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      {Data?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
