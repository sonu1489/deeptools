import React from "react";
const Home = () => {
  return (
    <>
      <div className="home_img Nav"></div>
      <div>
        <div className={`header-content`}>
          <h1>
            DEEP TOOLS Provide solution To your Business Needs Whatever They
            maybe,
          </h1>
        </div>
      </div>

      <div className="col">
        <h1>Company Overview</h1>
        <p>
          On the onset let me first thank you for giving me the opportunity to
          introduce my company
          <span style={{ fontFamily: "cursive" }}> DEEP TOOLS.</span>
        </p>
        <p>
          We are a young team of professionals who have joined hands to bring
          out sustainable competitive development through innovation, quality
          and value based pricing. The stepping stone leading to foundation of
          DEEP TOOLS came into realization on MAY 2019, with the purpose of
          providing quality based tooling facility in array with customized
          tooling development. Our product line includes Tools, Dies, Jigs,
          Fixtures, and Machined Components.
        </p>
        <p>
          Under one facility, what we would like to boast about is our ability
          to design Panel Checkers and Welding Fixtures. Equipped with latest UG
          (UNIGRAPHIC), our aim is to picturise ideas and design into the 3D
          world with utmost tolerance and fitment capabilities. With quality
          determination up-to 6-σ and esteemed development core team, Deep Tools
          looks forward to the adventure that you & I are going to voyeur.
        </p>
      </div>
      <div className="about-us">
        <div className="card">
          <img src="/image/machineparts/depak.jpg" alt="" />
          <h1> Mr. Deepak Sharma</h1>
          <p>designation</p>
        </div>
        <div className="card">
          <img src="/image/machineparts/papaji.jpg" alt="" />
          <h1>Mr. Chander pal Sharma</h1>
          <p>designation</p>
        </div>
      </div>
      <div className="customers">
        <div className="company_title">
          <h1>Companies we work with....</h1>
        </div>
        <div className="company_logo">
          <h1>VeeGee Industries</h1>
          <h1>Swastik Auto</h1>
          <h1>dai-ichi Tools</h1>
          <h1>Radiant</h1>
          <h1>JRD</h1>
          <h1>Micro Tools</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
