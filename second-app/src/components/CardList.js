import React from "react";
import CardItem from "./Card";
import "./cardList.css";
const CardList = (props) => {
  return (
    <div className="row">
      {" "}
      {props.users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
