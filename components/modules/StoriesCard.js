import Image from "next/image";
// style
import styles from "../../styles/StoriesStyle.module.scss";

const StoriesCard = ({ images, profile }) => {
  return (
    <div className={styles.container}>
      <Image
        src={images}
        width={150}
        height={350}
        className={styles.coverImage}
      />
      <Image
        src={profile}
        width={50}
        height={50}
        className={styles.profileImage}
      />
    </div>
  );
};

export default StoriesCard;
