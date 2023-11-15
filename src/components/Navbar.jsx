import { NavLink } from "react-router-dom";
import { paths } from "../App";

const activeNavlink = ({ isActive }) => (isActive ? "active-navlink" : "");

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={paths.main} className={activeNavlink}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.posts} className={activeNavlink}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.login} className={activeNavlink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
