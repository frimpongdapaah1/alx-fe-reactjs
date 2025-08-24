import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> |{" "}
        <Link to="/blog/1">View Blog Post 1</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
