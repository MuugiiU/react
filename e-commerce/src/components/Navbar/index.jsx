import Search from "./Search";
import DropdownMenu from "./Dropdown";
import Menus from "./Menus";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div>
      <Menus />
      <Search />
      <DropdownMenu />
    </div>
  );
};
export default Navbar;
