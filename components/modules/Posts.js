import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
// style
import styles from "../../styles/PostsStyle.module.scss";
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
    <div className={styles.mainContainer}>
      {Data?.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
