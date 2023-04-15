import { itemArray } from "@/utils/dummy";
import { Avatar, Stack } from "@mui/material";
// styles
import styles from "../../styles/Sidebar.module.scss";
const SideBar = () => {
  return (
    <Stack
      flexDirection={"column"}
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
      }}
    >
      <div>
        <div className={styles.profSection}>
          <Avatar sx={{ width: "23px", height: "23px" }} />
          <p>mohammad</p>
        </div>
        {itemArray.map((item) => (
          <div key={item.name} className={styles.itemContainer}>
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default SideBar;
