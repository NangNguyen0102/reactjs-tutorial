import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data.slice(0, 15));
    })();
  }, []);

  const listMarkup =
    posts.length > 0 ? (
      posts.map((x) => (
        <div className="card shadow p-3 mb-5 bg-white rounded" key={x.id}>
          <div className="card-body">
            <Link to={`/posts/${x.id}`}>
              <h5 className="card-title">{x.title}</h5>
            </Link>
            <p className="card-text">{x.body}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">No post found</div>
    );

  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {listMarkup}
    </div>
  );
};

export default Home;
