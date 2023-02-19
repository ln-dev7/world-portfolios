import Link from "next/link";

const Section = () => {
  return (
    <section className="section">
      <div className="section-intro">
        <div className="section-intro__text">
          <h1>Cameroon Portfolios</h1>
          <p>Open source collection of Cameroonian portfolios</p>
          <Link href="https://github.com/ln-dev7/cameroon-porfolios">
            Contribute on github
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
