import React, { useContext } from "react";
import { NavBarContext } from "./NavBar";
// use context looks for the user context exported
export const UserContainer = () => {
  //   const valuePassedInNavBar = useContext(NavBarContext);
  //   console.log(valuePassedInNavBar);
  const { user, logout } = useContext(NavBarContext);

  // both the user and logout func printed here
  return (
    <>
      <div> Hello there</div>
      <div> {user?.name}</div>
      <button onClick={logout}>logout</button>
    </>
  );
};
