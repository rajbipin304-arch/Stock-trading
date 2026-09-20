import React from 'react';

function LeftImage({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container">
            <div className="row align-items-center">

                <div className="col-6 p-4">
                    <img
                        src={imageURL}
                        className="img-fluid"
                        alt={productName}
                    />
                </div>

                <div className="col-6 p-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div className="mt-4">
                        <a href={tryDemo}>Try Demo</a>
                        <a
                            href={learnMore}
                            style={{ marginLeft: "50px" }}
                        >
                            Learn More
                        </a>
                    </div>

                    <div className="mt-4">
                        <a href={googlePlay}>
                            <img
                                src="/media/images/googlePlayBadge.svg"
                                alt="Google Play"
                                style={{ width: "180px" }}
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="/media/images/appstoreBadge.svg"
                                alt="App Store"
                                style={{
                                    width: "180px",
                                    marginLeft: "50px"
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;