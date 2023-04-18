import { itemArray } from "@/utils/dummy";
import { Avatar, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
// styles
import styles from "../../styles/Sidebar.module.scss";
const SideBar = () => {
  const { data } = useSession();
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
          <Avatar
            src={data?.user?.image || ""}
            sx={{ width: "23px", height: "23px" }}
          />
          <p>{data?.user?.name}</p>
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
