import React from 'react';

function Awards(){
    return (
        <div className="container mt-5">
            <div className = "row ">
                <div className ="col-6 p-5">
                    <img src="/media/images/largestbroker.svg" alt = "largest  broker" />
                </div>
                <div className ="col-6 p-5 mt-3">
                    <h1>Largest stock broker in india</h1>
                    <p className="mb-5">2+ million clients contribute to over 15% of all trading volume in india by trading and investing in:</p>
                    <div className = "row ">
                        <div className ="col-6">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>commodity and derivatives</p>
                            </li>
                            <li>
                                <p>currency derivatives</p>
                            </li>
                        </ul>
                        </div>
                        <div className = "col-6">
                        <ul>
                            <li>
                                <p>stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and government securities </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" alt = "press logos" style={{ width: '90%' }}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;