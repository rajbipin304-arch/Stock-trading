import React from "react";

import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer"

function ProductPage(){
    return(
        <>
            <Hero />
            <LeftImage imageURL="/media/images/kite.png"
            productName="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data,advanced charts,an elegant UI and more. Enjoy the kite experience seamlessly on your android and IOS."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore="" />
            <RightImage
            imageURL="/media/images/console.png"
            productName="Console"
            productDescription="The central dashboard for your zerodha account. Gain insights into your trades and investments with in-depth reports and visualisation."
            learnMore=""
            />
            <LeftImage imageURL="/media/images/coin.png"
            productName="Coin"
            productDescription="Buy direct funds online,commision-free,delivered direcctly to your Demat account. Enjoy the investment experience on your Android and IOS device."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore="" />
            <RightImage
            imageURL="/media/images/kiteconnect.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platform and experiences with our super simple HTTP/JSON APIs. if you are a startup,build your investment app and showcase it to our clientbase."
            learnMore=""
            />
            <LeftImage imageURL="/media/images/varsity.png"
            productName="Varsity"
            productDescription="An easy to grasp,collection of stock market lessons with in-depth coverage and illustrations. content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore="" />
            <p className="text-center">
                Want to know more about our technology stack? Check out the zerodha.tech blog.
            </p>
            <Universe />
        </>
    );
}

export default ProductPage;