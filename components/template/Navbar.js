import { AppBar, Avatar, TextField, Toolbar } from "@mui/material";
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
          <div>
            {/* profile section */}
            <Avatar />
            <p>mohammad ate</p>
          </div>
          <div className={styles.rightIcon}>
            <MdWidgets className={styles.icon} />
            <BsFillChatDotsFill className={styles.icon} />
            <IoNotificationsOutline className={styles.icon} />
            <MdKeyboardArrowDown
              className={styles.icon}
              style={{ border: "1px solid darkgray", borderRadius: "50%" }}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
