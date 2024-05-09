import { Link, Route, Routes } from "react-router-dom";
import { useCallback, useState } from "react";
import LocaleContext from "./context/LocaleContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import UserProfile from "./pages/UserProfile";
import Counter from "./pages/Counter";

export default function Example() {
  const [locale, setLocale] = useState("en");

  const toggleLocale = useCallback(() => {
    setLocale((locale) => (locale === "en" ? "id" : "en"));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |{" "}
        <Link to="/user">User</Link> | <Link to="/posts">Posts</Link> |{" "}
        <Link to="/count">Count</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user"
          element={<UserProfile name="John Doe" age={30} />}
        />
        <Route path="/posts" element={<Posts />} />
        <Route path="/count" element={<Counter />} />
      </Routes>
    </LocaleContext.Provider>
  );
}
