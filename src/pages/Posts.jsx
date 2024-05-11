import { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((posts) => this.setState({ posts }))
        .catch((error) => this.setState({ error }));
    }, 1000);
    console.log("Komponen telah di-mount");
  }

  componentDidUpdate() {
    console.log("Komponen telah di-render ulang");
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <>Error: {error.message}</>;
    }

    return (
      <>
        <h1>Daftar Posting</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Posts;
