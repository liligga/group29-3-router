import { NavLink } from "react-router-dom";

const activeNavlink = ({ isActive }) => (isActive ? "active-navlink" : "");

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={activeNavlink}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={activeNavlink}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={activeNavlink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
