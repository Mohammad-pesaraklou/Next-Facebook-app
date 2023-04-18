import SideBar from "@/components/modules/SideBar";
import styles from "../styles/Home.module.scss";
import Feed from "@/components/template/Feed";
import Contacts from "@/components/template/Contacts";
import { signIn, useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  if (session.status === "unauthenticated") return signIn();

  return (
    <div className={styles.container}>
      <SideBar />
      <Feed />
      <Contacts />
    </div>
  );
}
