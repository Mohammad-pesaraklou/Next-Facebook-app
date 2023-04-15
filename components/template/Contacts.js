import { contacts } from "@/utils/dummy";
import { Avatar, Stack } from "@mui/material";
import styles from "../../styles/Contact.module.scss";

const Contacts = () => {
  return (
    <div className={styles.container}>
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
