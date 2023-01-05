import Search from "./Search";
import Submenu from "./Submenu";
import Menus from "./Menus";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <Menus />
      <Submenu />
      <Search />
    </div>
  );
};
export default Navbar;
