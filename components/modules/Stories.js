// data
import { StoriesData } from "@/utils/dummy";
// styles
import styles from "../../styles/StoriesStyle.module.scss";
// components
import StoriesCard from "./StoriesCard";

const Stories = () => {
  return (
    <div className={styles.mainContainer}>
      {StoriesData.map((story) => (
        <StoriesCard {...story} key={story.name} />
      ))}
    </div>
  );
};

export default Stories;
