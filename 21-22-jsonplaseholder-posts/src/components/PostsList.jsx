import {useEffect, useState} from "react";
import PostItem from "./PostItem.jsx";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function PostsList() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      })();
    } catch (e) {
      setError(e.message);
      console.error("Ошибка при загрузке постов", e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
      <div className="postsList">
        {loading ? (<h2>Loading...</h2>) :
            posts && (posts.map((post) => (
                <PostItem key={post.id} {...post} />
            ))
        )}
      </div>
  );
}