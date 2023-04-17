import { contacts } from "@/utils/dummy";
import { Avatar, Typography } from "@mui/material";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
// style
import styles from "../../styles/Contact.module.scss";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div>
          <Typography variant="h6">Contacts</Typography>
        </div>
        <div className={styles.iconContainer}>
          <VideoCameraFrontOutlinedIcon sx={{ color: "gray" }} />
          <SearchOutlinedIcon sx={{ color: "gray" }} />
          <MoreHorizSharpIcon sx={{ color: "gray" }} />
        </div>
      </div>
      <div>
        {contacts.map((item) => (
          <div key={item.name} className={styles.itemSection}>
            <Avatar src={item.images} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
