import SideBar from "@/components/modules/SideBar";
import styles from "../styles/Home.module.scss";
import Feed from "@/components/template/Feed";
import Contacts from "@/components/template/Contacts";
export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Feed />
      <Contacts />
    </div>
  );
}
