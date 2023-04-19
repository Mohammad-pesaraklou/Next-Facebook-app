import { signIn, useSession } from "next-auth/react";
// styles
import styles from "../styles/Home.module.scss";
// components
import Contacts from "@/components/template/Contacts";
import Feed from "@/components/template/Feed";
import SideBar from "@/components/modules/SideBar";

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
