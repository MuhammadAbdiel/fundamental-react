import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostId() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setPost(() => data))
      .catch((error) => setPost(() => error));
  }, [id]);

  if (!id) {
    return <div>Not found</div>;
  }

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
}
