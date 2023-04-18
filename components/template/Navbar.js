import { AppBar, Avatar, TextField, Toolbar } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
// icon
import { BsFacebook } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineFlag } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { MdWidgets } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
// style
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const session = useSession();
  const { data } = session;
  console.log(session);
  const signInHandler = () => {
    if (session.status === "unauthenticated") {
      signIn("github");
    } else if (session.status === "authenticated") {
      signOut();
    }
  };

  return (
    <AppBar sx={{ background: "#fff" }}>
      <Toolbar
        sx={{
          background: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.left}>
          {/* left side */}
          <BsFacebook className={styles.facebookIcon} />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search in Facebook.."
            sx={{ marginLeft: "10px", display: { xs: "none", md: "block" } }}
          />
        </div>
        <div className={styles.center}>
          {/* center */}
          <AiFillHome className={styles.icon} style={{ color: "blue" }} />
          <HiOutlineFlag className={styles.icon} />
          <AiOutlinePlayCircle className={styles.icon} />
          <MdOutlineLocalGroceryStore className={styles.icon} />
          <HiUserGroup className={styles.icon} />
        </div>
        <div className={styles.right}>
          {/* right side */}
          <div onClick={signInHandler}>
            {/* profile section */}
            <Avatar src={data?.user?.image || ""} />
            <p>{data?.user?.name} </p>
          </div>
          <div className={styles.rightIcon}>
            <div>
              <MdWidgets style={{ fontSize: "20px" }} className={styles.icon} />
            </div>
            <div>
              <BsFillChatDotsFill
                style={{ fontSize: "20px" }}
                className={styles.icon}
              />
            </div>
            <div>
              <IoNotificationsOutline
                style={{ fontSize: "20px" }}
                className={styles.icon}
              />
            </div>
            <div>
              <MdKeyboardArrowDown
                className={styles.icon}
                style={{ fontSize: "20px" }}
              />
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
