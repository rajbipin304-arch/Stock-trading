import React from 'react';

function Hero(){
    return (
        <section className ="container-fluid" id="supportHero">
            <div className ="p-3 mt-5 mb-5 " id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="">Track tickets</a>
            </div>
            <div className="row p-3 m-5">
            <div className="col-5 p-3">
                <h1>Search for an answer or browse help topics to create ticket</h1>
                <input placeholder="Eg. how do i activare F&O."/>
                <br />
                <a href="">Track account opening</a>
                <a href="">Track segment activation</a>
                <a href="">Intraday margins</a>
                <a href="">Kite user manual</a>
            </div>
            <div className="col "></div>
            <div className="col-5 p-3">
                <h1 className="fs-3 mr-3">Featured</h1>
                <ol>
                    <li><a href="">Current takeovers and delisting - january 2024</a></li>
                    <li><a href="">Latest intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
            </div>
        </ section>
    );
}

export default Hero;