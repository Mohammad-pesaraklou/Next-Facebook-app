import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import moment from "moment";
import axios from "axios";
// icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { AiOutlineShareAlt } from "react-icons/ai";
// styles
import styles from "../../styles/PostsStyle.module.scss";

const PostCard = ({ author, message, image, createdAt, _id }) => {
  const { data } = useSession();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const deleteHandler = async (id) => {
    const req = await axios.delete(`api/posts/${id}`);
    setOpen(false);
    if (req.status === 201) return router.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.detailsContainer}>
          <Avatar src={data?.user?.image || ""} />
          <div className={styles.details}>
            <p>{author}</p>
            <span> {moment(createdAt).utc().format("YYYY-MM-DD")}</span>
          </div>
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do You Really Wanna permanently Delete This Post?
            </Typography>
            <div style={{ margin: "10px 0px" }}>
              <Button
                color="error"
                sx={{ marginRight: 3 }}
                variant="contained"
                size="small"
                onClick={() => deleteHandler(_id)}
              >
                Delete
              </Button>
              <Button
                color="info"
                onClick={handleClose}
                variant="contained"
                size="small"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>

        <div className={styles.removeBtn}>
          <DeleteOutlineOutlinedIcon onClick={handleOpen} />
        </div>
      </div>
      <div className={styles.content}>{message}</div>
      <div>
        {image && (
          <img src={image} alt="post image" className={styles.postImg} />
        )}
      </div>
      <div className={styles.bottomSection}>
        <div>
          <ThumbUpOutlinedIcon style={{ color: "darkgray" }} />
          <p>Like</p>
        </div>
        <div>
          <ChatOutlinedIcon style={{ color: "darkgray" }} />
          <p>Comment</p>
        </div>
        <div>
          <AiOutlineShareAlt style={{ color: "darkgray" }} />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
