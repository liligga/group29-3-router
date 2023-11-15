import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(resp.data);
    };
    getPosts();
  }, []);

  return (
    <div>
      PostsPage
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>
              <Link to={`/posts/${post.id}`}>{post.title}</Link> 
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostsPage;
