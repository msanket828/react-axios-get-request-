import React from "react";

import classes from "./User.module.css";

const User = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </li>
  );
};

export default User;
