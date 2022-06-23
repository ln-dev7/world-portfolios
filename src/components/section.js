import React from "react";
import "./../styles/section.scss";

const Section = () => {
  return (
    <section className="section">
      <div className="section-intro">
        <div className="section-intro__text">
          <h1>Cameroon Portfolios</h1>
          <p>Open source collection of Cameroonian portfolios</p>
          <a href="https://github.com/ln-dev7/cameroon-porfolios">
            Contribute on github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
