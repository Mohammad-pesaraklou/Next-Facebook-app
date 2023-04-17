import Stories from "../modules/Stories";
import styles from "../../styles/Feed.module.scss";
import InputBox from "../modules/InputBox";
import Posts from "../modules/Posts";
const Feed = () => {
  return (
    <div className={styles.container}>
      <Stories />
      <InputBox />
      <Posts />
    </div>
  );
};

export default Feed;
