import Link from "next/link";

const Section = () => {
  return (
    <section className="section">
      <div className="section-intro">
        <div className="section-intro__text">
          <h1>World Portfolios</h1>
          <p>Open source collection of World Portfolios</p>
          <div className="">
            <Link href="https://github.com/ln-dev7/world-porfolios">
              Contribute on github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
