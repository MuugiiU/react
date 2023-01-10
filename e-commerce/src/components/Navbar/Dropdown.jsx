import Submenu from "./Submenu";
import { Nav } from "react-bootstrap";

const DropMenus = [
  {
    title: "Browse Categories",
    potision: 1,
    id: "neg",
    key: "1",
    children: [
      { title: "Category 1", potision: 1 },
      { title: "Category 2", potision: 2 },
    ],
  },
  {
    title: "Home",
    potision: 2,
    id: "hoyor",
    children: [
      { title: "Contact", potision: 1 },
      { title: "News", potision: 2 },
    ],
  },
  { title: "Blog", potision: 3, id: "gurav", children: [] },
  {
    title: "Pages",
    potision: 4,
    id: "duruv",
    children: [
      {
        title: "Page 1",
        potision: 1,
      },
      {
        title: "Page 2",
        potision: 2,
      },
      {
        title: "Page 3",
        potision: 3,
      },
    ],
  },
  {
    title: "About us",
    potision: 5,
    id: "gurav",
    children: [],
  },
];
const DropdownMenu = () => {
  return (
    <Nav>
      {DropMenus.map((DropMenu, index) => (
        <Submenu
          key={index}
          title={DropMenu.title}
          potision={DropMenu.potision}
          id={DropMenu.id}
          children={DropMenu.children}
        />
      ))}
      <p className="t">30 Days Free Return</p>
    </Nav>
  );
};
export default DropdownMenu;
