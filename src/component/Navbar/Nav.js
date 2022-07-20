import React from "react";

const Nav = () => {
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

          <ul>
            <li>
              <a className="a" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="a" href="/products">
                Products
              </a>
            </li>
            <li>
              <a className="a" href="/contactus">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
