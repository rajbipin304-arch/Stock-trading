import React from "react";

function Universe() {
    return (
        <div className="container mt-5">

            <div className="text-center">
                <p>
                    Want to know more about our technology stack?
                    Check out the Zerodha.tech blog.
                </p>

                <h1 className="mt-5">
                    The Zerodha Universe
                </h1>

                <p className="mt-4">
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
            </div>

            {/* Logos */}
            <div className="row text-center mt-5">

                {/* Smallcase */}
                <div className="col-4 mb-5">
                    <img
                        src="/media/images/smallcaseLogo.png"
                        style={{ width: "200px" }}
                        alt="Smallcase"
                    />
                    <p className="mt-3">
                        Thematic investment platform
                    </p>
                </div>

                {/* Streak */}
                <div className="col-4 mb-5">
                    <img
                        src="/media/images/streakLogo.png"
                        style={{ width: "180px" }}
                        alt="Streak"
                    />
                    <p className="mt-3">
                        Algo & strategy platform
                    </p>
                </div>

                {/* Sensibull */}
                <div className="col-4 mb-5">
                    <img
                        src="/media/images/sensibullLogo.png"
                        style={{ width: "200px" }}
                        alt="Sensibull"
                    />
                    <p className="mt-3">
                        Options trading platform
                    </p>
                </div>

                {/* Zerodha Fund House */}
                <div className="col-4 mb-5">
                    <img
                        src="/media/images/zerodhaFundhouse.png"
                        style={{ width: "230px" }}
                        alt="Zerodha Fund House"
                    />
                    <p className="mt-3">
                        Asset management
                    </p>
                </div>

                {/* GoldenPi */}
                <div className="col-4 mb-5">
                    <img
                        src="/media/images/goldenpiLogo.png"
                        style={{ width: "200px" }}
                        alt="GoldenPi"
                    />
                    <p className="mt-3">
                        Bonds trading platform
                    </p>
                </div>

                {/* Ditto */}
                <div className="col-4 mb-5">
                    <img
                        src="/media/images/dittoLogo.png"
                        style={{ width: "120px" }}
                        alt="Ditto"
                    />
                    <p className="mt-3">
                        Insurance platform
                    </p>
                </div>

            </div>

            {/* Sign Up Button */}
            <div className="text-center mt-3 mb-5">
                <button className="btn btn-primary px-5 py-2">
                    Sign up now
                </button>
            </div>

        </div>
    );
}

export default Universe;