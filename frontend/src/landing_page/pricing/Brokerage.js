import React from 'react';

function Brokerage() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 border-top">
                <div className="col-6 text-center">
                    <a href="" style={{ textDecoration: "none" }}>
                        Brokerage calculator
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href="" style={{ textDecoration: "none" }}>
                        List of charges
                    </a>
                </div>
            </div>
            <div className="mt-4">
                <ul className="text-muted">
                    <li className="mb-4">
                        Call & Trade and RMS auto-squareoff:
                        Additional charges of ₹50 + GST per order.
                    </li>
                    <li className="mb-4">
                        Digital contract notes will be sent via e-mail.
                    </li>
                    <li className="mb-4">
                        Physical copies of contract notes, if required,
                        shall be charged ₹20 per contract note.
                        Courier charges apply.
                    </li>
                    <li className="mb-4">
                        For NRI account (non-PIS), 0.5% or ₹100 per
                        executed order for equity (whichever is lower).
                    </li>
                    <li className="mb-4">
                        For NRI account (PIS), 0.5% or ₹200 per
                        executed order for equity (whichever is lower).
                    </li>
                    <li className="mb-4">
                        If the account is in debit balance, any order
                        placed will be charged ₹40 per executed order
                        instead of ₹20 per executed order.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Brokerage;