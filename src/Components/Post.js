import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(res.data);
    })();
  }, [postId]);
  return (
    <div>
      <div className="card">
        <h5 className="card-header">{postId}</h5>
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
