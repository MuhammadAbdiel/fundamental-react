import { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  componentDidMount() {
    // Metode ini dipanggil setelah komponen pertama kali dirender ke DOM
    // Biasanya digunakan untuk melakukan fetching data dari server
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
    // Metode ini dipanggil setiap kali komponen di-render ulang
    // Biasanya digunakan untuk melakukan memperbarui data state
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
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Posts;
