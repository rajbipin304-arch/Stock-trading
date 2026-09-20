import React from "react";

function Team() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-normal">People</h1>
      </div>

      {/* Content */}
      <div className="row justify-content-center align-items-start">

        {/* Image and Name */}
        <div className="col-md-4 text-center">
          <img
            src="/media/images/nithinkamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle"
            style={{
              width: "230px",
              height: "230px",
              objectFit: "cover"
            }}
          />

          <h5 className="mt-4 mb-2">Nithin Kamath</h5>

          <p className="text-muted">
            Founder, CEO
          </p>
        </div>

        {/* Description */}
        <div className="col-md-6">

          <p className="text-muted lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome
            the hurdles he faced during his decade long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking
            industry.
          </p>

          <p className="text-muted lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-muted lh-lg">
            Playing basketball is his zen.
          </p>

          <p className="text-muted">
            Connect on{" "}
            <a href="#" className="text-primary text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-primary text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-primary text-decoration-none">
              Twitter
            </a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Team;