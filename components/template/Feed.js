// styles
import styles from "../../styles/Feed.module.scss";
// components
import Stories from "../modules/Stories";
import Posts from "../modules/Posts";
import InputBox from "../modules/InputBox";

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
