import { AppBar, Avatar, TextField, Toolbar, useTheme } from "@mui/material";
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
import LogoutIcon from "@mui/icons-material/Logout";
// style
import styles from "../../styles/Navbar.module.scss";
import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setToggle(!toggle);
  const session = useSession();
  const { data } = session;

  const signHandler = () => {
    if (session.status === "unauthenticated") {
      signIn("github");
    } else if (session.status === "authenticated") {
      signOut();
    }
  };

  const Div = styled("div")`
    display: ${toggle ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    background: rgba(255, 255, 255, 0.837);
    color: black;
    width: 300px;
    height: 150px;
    position: absolute;
    top: 90%;
    right: 15%;
    border-radius: 15px;
    padding: 20px 10px;
    box-shadow: 10px 10px 8px rgba(204, 200, 200, 0.361),
      -7px -7px 20px rgba(204, 200, 200, 0.361);

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    p {
      &:hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  `;

  return (
    <AppBar sx={{ background: "#fff", position: "relative" }}>
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
            sx={{
              marginLeft: "10px",
              display: { xs: "none", md: "block" },
            }}
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
        <Div>
          <div>
            <Avatar src={data?.user?.image || ""} />
            <p>{data?.user?.name} </p>
          </div>
          <div>
            {session.status === "authenticated" && (
              <div>
                <LogoutIcon />
                <p onClick={signHandler}>Log out</p>
              </div>
            )}
          </div>
        </Div>
        <div className={styles.right}>
          {/* right side */}
          <div onClick={handleClose}>
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
