import React from "react";
import { NavLink, NavDropdown, NavItem } from "react-bootstrap";
const Submenu = (props) => {
  const menu =
    props.children.length > 0 ? (
      <NavDropdown title={props.title}>
        {props.children.map((child) => {
          return <NavDropdown.Item>{child.title}</NavDropdown.Item>;
        })}
      </NavDropdown>
    ) : (
      <NavLink>{props.title}</NavLink>
    );
  return <NavItem id={props.id}>{menu}</NavItem>;
};
export default Submenu;
