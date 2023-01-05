import Search from "./Search";
// import Submenu from "./Submenu";
import Menus from "./Menus";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div>
      <Menus />
      {/* <Submenu /> */}
      <Search />
    </div>
  );
};
export default Navbar;
