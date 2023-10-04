import React from "react";
import { UserContainer } from "./UserContainer";

export const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#"> home</a>
        </li>
        <li>
          <a href="#"> about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
