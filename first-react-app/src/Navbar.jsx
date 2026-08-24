import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="kos">
      <Link to="/" className="ko">
        Home
      </Link>
      <Link to="/about" className="ko">
        About
      </Link>
      <Link to="/contact" className="ko">
        Contact
      </Link>
      <Link to="/user/:name" className="ko">
        User
      </Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
export default Navbar;
