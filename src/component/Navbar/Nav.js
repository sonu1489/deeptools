import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <div>
            <h1 className="logo" style={{ fontSize: "2rem" }}>
              <span style={{ color: "red" }}>Deep</span>
              <span style={{ color: "white" }}>Tools</span>
            </h1>
          </div>
          <div onClick={() => setShowMenu(!showmenu)}>
            <GiHamburgerMenu className="burger" />
          </div>
          <ul className={` ${showmenu ? "showmenu" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
