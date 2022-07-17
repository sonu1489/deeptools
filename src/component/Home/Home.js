import React, { useEffect, useState } from "react";
import data from "../sheetmetalimage/images";
const Home = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0, 1);
    }
  }, [index, people]);

  useEffect(() => {
    let Slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(Slider);
    };
  }, [index]);

  return (
    <>
      <div className="home_img Nav"></div>
      <div>
        <div className={`header-content`}>
          <h1>
            DEEP TOOLS Provide robust and rustic tooling solution and
            consultancies
          </h1>
        </div>
      </div>

      <div className="col">
        <h1>Company Overview</h1>
        <p>
          On the onset, I thank you for giving me the opportunity to let me
          represent my firm
          <span> DEEP TOOLS.</span>
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
          (UNIGRAPHIC) NX 10, our aim is to materialize ideas and design into
          the 3D world with utmost tolerance and fitment capabilities. With
          quality determination up-to 6-σ and esteemed development core team,
          Deep Tools looks forward to the adventure that you & I are going to
          voyeur.
        </p>
      </div>
      <div className="full-width">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, img, name, design } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={img} alt="" />
                <div>
                  <h1>{name}</h1>
                  <h2 style={{ color: "#fff" }}>{design}</h2>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="customers">
        <div className="company_title">
          <h1>Companies we work with....</h1>
        </div>
        <div className="company_logo">
          <h1>Muvtons</h1>
          <h1>VeeGee Industries</h1>
          <h1>Swastik Auto</h1>
          <h1>Dai-ichi Tools</h1>
          <h1>JRD</h1>
          <h1>Micro Tools</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
