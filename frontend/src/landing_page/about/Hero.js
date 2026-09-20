import React from "react";

function Hero() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h1 className="text-center fs-2 fw-normal">
            We pioneered the discount broking model in India
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <hr className="my-5" />

      {/* Two column section */}
      <div className="row justify-content-center mt-5">

        {/* Left column */}
        <div className="col-md-5">

          <p className="text-muted lh-lg">
            We kick-started operations on the 15th of August, 2010 with
            the goal of breaking all barriers that traders and investors
            face in India in terms of cost, support, and technology. We
            named the company Zerodha, a combination of Zero and
            "Rodha", the Sanskrit word for barrier.
          </p>

          <p className="text-muted lh-lg">
            Today, our disruptive pricing models and in-house technology
            have made us the biggest stock broker in India.
          </p>

          <p className="text-muted lh-lg">
            Over 1+ Crore clients place millions of orders every day
            through our powerful ecosystem of investment platforms,
            contributing over 15% of all Indian retail trading volumes.
          </p>

        </div>

        {/* Right column */}
        <div className="col-md-5">

          <p className="text-muted lh-lg">
            In addition, we run a number of popular open online
            educational and community initiatives to empower retail
            traders and investors.
          </p>

          <p className="text-muted lh-lg">
            <a href="#" className="text-primary text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian
            capital markets.
          </p>

          <p className="text-muted lh-lg">
            And yet, we are always up to something. Catch up on the
            latest updates on our blog and see what the media is saying
            about us.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;