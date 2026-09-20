import React from 'react';

function Hero(){
    return (
        <div className = "container p-5">
            <div className="row text-center">
                <img src = "/media/images/homehero.png" alt="Home Hero" className="mb-5"/>
            
                <h1 className = "mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more.</p>
                <button className= "p-3" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>SignUp now</button>
            </div>
        </div>
    );
}
export default Hero;