import React, { createContext, useState } from "react";
import { NavLinks } from "./NavLinks";
///declare in the parent
export const NavBarContext = createContext();
//console.log(NavBarContext);
const NavBar = () => {
  const [user, setUser] = useState({ name: "bob" });
  // to log out
  const logout = () => {
    setUser(null);
  };
  return (
    // value passed in this tag is accessible to all the children inside the tree
    <NavBarContext.Provider value={{ user, logout }}>
      <div>
        <h1>Context API</h1>
        <NavLinks></NavLinks>
      </div>
    </NavBarContext.Provider>
  );
};

export default NavBar;
