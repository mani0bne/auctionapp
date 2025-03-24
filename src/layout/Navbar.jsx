import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/main">Home</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;
