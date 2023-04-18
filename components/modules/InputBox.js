import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";
import axios from "axios";
// icon
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
// styles
import styles from "../../styles/InputBox.module.scss";

const InputBox = () => {
  const { data } = useSession();
  const fileRef = useRef(null);
  const messageRef = useRef();
  const [imagePicker, setImagePicker] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImagePicker(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImagePicker(null);
  };

  const sendPost = async (e) => {
    e.preventDefault();
    if (!messageRef.current.value) {
      setErrorMsg("Invalid Data!");
      return;
    }
    const obj = {
      author: data?.user?.name,
      message: messageRef.current.value,
      image: imagePicker,
    };

    const req = await axios.post("api/posts/addPost", {
      obj,
    });
    console.log(req);
    messageRef.current.value = "";
    setImagePicker(null);
    if (req.status === 201) return router.reload();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={sendPost}>
        <Avatar className={styles.avatar} src={data?.user?.image || ""} />
        <input
          type="text"
          ref={messageRef}
          placeholder={`What's on your Mind, ${data?.user?.name}?`}
          className={styles.InputBox}
        />
        {imagePicker && (
          <div className={styles.pickIemContainer}>
            <img
              className={styles.pickImage}
              src={imagePicker}
              alt="this is picker"
            />
            <p onClick={removeImage}>Remove</p>
          </div>
        )}
      </form>
      <div className={styles.divider}></div>
      <div className={styles.emojiSection}>
        <div>
          <VideoCameraFrontOutlinedIcon style={{ color: "rgb(241, 88, 12)" }} />
          <p>Live Video</p>
        </div>
        <div onClick={() => fileRef.current.click()}>
          <CameraAltIcon style={{ color: "rgb(68, 143, 91)" }} />
          <p>Photo/Video</p>
          <input onChange={addImageToPost} type="file" hidden ref={fileRef} />
        </div>
        <div>
          <SentimentSatisfiedIcon style={{ color: "rgb(218, 221, 46)" }} />
          <p>Feeling's/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
