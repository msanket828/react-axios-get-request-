import React from "react";

import classes from "./UserList.module.css";
import Post from "./User";

const UserList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.user &&
        props.user.map((indUser) => (
          <Post
            key={indUser.id}
            name={indUser.name}
            email={indUser.email}
            phone={indUser.phone}
          />
        ))}
    </ul>
  );
};

export default UserList;
