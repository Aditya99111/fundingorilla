import React from "react";

function Hero() {
    return (
        <section className="home" id="home">
            <div className="content">
                <h3>
                    content for investors <span>will add afterwards</span>
                </h3>
                <p>
                    We know you are smart and intelligent, and have the billion
                    dollar idea which will shape the future! So we are here to
                    help you raise funds for your business!
                </p>
                <a href="#signup" className="btn">
                    Join now
                </a>
            </div>
            <div className="image">
                <img
                    height="400px"
                    width="400px"
                    src="/images/about].svg"
                    alt="business funding"
                />
            </div>
        </section>
    );
}

export default Hero;
