import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Table">Table</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Signup">Signup</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""} style={{ background: "red" }}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
