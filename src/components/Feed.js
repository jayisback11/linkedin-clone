import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TodayIcon from "@material-ui/icons/Today";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import Post from "./Post";
import { db, auth } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
  const user = useSelector(selectUser);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  console.log(auth.currentUser);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: message,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions title="Photo" Icon={ImageIcon} color="lightblue" />
          <InputOptions title="Video" Icon={YouTubeIcon} color="lightgreen" />
          <InputOptions title="Event" Icon={TodayIcon} color="#e7a33e" />
          <InputOptions
            title="Write Article"
            Icon={VerticalSplitIcon}
            color="#fc9295"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
