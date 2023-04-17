import { StoriesData } from "@/utils/dummy";
import React from "react";
import StoriesCard from "./StoriesCard";
import styles from "../../styles/StoriesStyle.module.scss";

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
