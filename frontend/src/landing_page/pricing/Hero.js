import React from 'react';

function Hero(){
return (
    <div className="container">

        <div className="row p-5 mt-5 border-bottom text-center">
            <h1>Pricing</h1>

            <h3 className="text-muted mt-3 fs-5">
                Free equity investments and flat ₹20 intraday and F&O trades
            </h3>
        </div>

        <div className="row p-5 mt-5 text-center">
            <div className="col-4 p-5">
                <img
                    src="/media/images/pricingEquity.svg"
                    style={{ width: "250px" }}
                    alt="Free Equity Delivery"
                />
                <h2 className="mt-4">
                    Free equity delivery
                </h2>
                <p className="text-muted mt-3">
                    All equity delivery investments (NSE, BSE),
                    are absolutely free — ₹ 0 brokerage.
                </p>
            </div>

            <div className="col-4 p-5">
                <img
                    src="/media/images/IntradayTrades.svg"
                    style={{ width: "250px" }}
                    alt="Intraday and F&O trades"
                />
                <h2 className="mt-4">
                    Intraday and F&O trades
                </h2>
                <p className="text-muted mt-3">
                    Flat Rs. 20 or 0.03% (whichever is lower)
                    per executed order on intraday trades
                    across equity, currency, and commodity
                    trades.
                </p>
            </div>
            <div className="col-4 p-5">
                <img
                    src="/media/images/pricingEquity.svg"
                    style={{ width: "250px" }}
                    alt="Free direct MF"
                />
                <h2 className="mt-4">
                    Free direct MF
                </h2>
                <p className="text-muted mt-5">
                    All direct mutual fund investments are
                    absolutely free — ₹ 0 commission.
                </p>
            </div>

        </div>
    </div>
);
}
export default Hero;