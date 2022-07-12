import React, { useEffect } from "react";
import {
  fabrication,
  panelchecker,
  sheetmetal,
  tools,
} from "../sheetmetalimage/images";
const Product = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <div className="manufacture">
        <a
          href="/"
          onClick={(e) => {
            let hero = document.getElementById("hero");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Sheetmetal
        </a>
        <a
          href="/"
          onClick={(e) => {
            let tools = document.getElementById("tools");
            e.preventDefault();
            tools &&
              tools.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Tools
        </a>
        <a
          href="/"
          onClick={(e) => {
            let about = document.getElementById("about");
            e.preventDefault();
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Panel checker and Gauge
        </a>
        <a
          href="/"
          onClick={(e) => {
            let contact = document.getElementById("contact");
            e.preventDefault();
            contact &&
              contact.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Fabrication
        </a>
      </div>
      <div className="product_container" id="hero">
        {/* <h1>Component developed by us ...</h1> */}

        <h1>Sheetmetal</h1>
        <div className="img_size ">
          {sheetmetal.map((cat) => {
            return (
              <div className="img_map" key={cat.id}>
                <img src={cat.img} alt={cat.id} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="product_container" id="tools">
        <h1>Tools</h1>
        <div className="img_size">
          {tools.map((cat) => {
            return (
              <div className="img_map" key={cat.id}>
                <img src={cat.img} alt={cat.id} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="product_container" id="about">
        <h1>Panel Checker.</h1>
        <div className="img_size">
          {panelchecker.map((cat) => {
            return (
              <div className="img_map" key={cat.id}>
                <img src={cat.img} alt={cat.id} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="product_container" id="contact">
        <h1>fabrication Work</h1>
        <div className="img_size">
          {fabrication.map((cat) => {
            return (
              <div className="img_map" key={cat.id}>
                <img src={cat.img} alt={cat.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
