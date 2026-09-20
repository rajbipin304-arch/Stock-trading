import React from 'react';

function Stats(){
    return(
        <div className = "container p-5">
            <div className= "row p-5">
                <div className="col-6 p-5">
                    <h1 className ="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className ="fs-4">customer first always</h2>
                    <p className="text-muted">Thats why 1.3+ crore customers trust zerodha with 3.5+ lakh crore worth of equity investments</p>

                    <h2 className ="fs-4">No space or gimmicks</h2>
                    <p className="text-muted">No gimmicks,spam "garification" or annoying push notifications. High quality apps that you use at your pace,The way you like.</p>

                    <h2 className ="fs-4">The zerodha universe</h2>
                    <p className="text-muted">Not just an app but a whole ecosystem. Our investments in 30+ fintech startups offer you a tailored services specific to your needs.</p>

                    <h2 className ="fs-4">Do better with money</h2>
                    <p className="text-muted">with initiatives like Nudge and kill switch,we dont just faciliate transactions but actively help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img src="/media/images/ecosystem.png "  style= {{width: "90%"}}/>
                    <div className="text-center ">
                    <a href="" className=" mx-5" style ={{textDecoration: "none"}}>Explore out products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href="" >Try kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;