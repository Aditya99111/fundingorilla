import React from "react";

function Features() {
    return (
        <section className="features" id="features">
            <h1 className="heading"> features </h1>
            <div className="box-container">
                <div className="box">
                    <img
                        height="180px"
                        width="210px"
                        src="/images/f-icon1.png"
                        alt="fundingorilla features"
                    />
                    <h3>Reach investors who believe in your idea!</h3>
                    <p>
                        We’ll help you reach the right investors who want to
                        help your idea and business grow!
                    </p>
                    <a href="#" className="btn">
                        Read More
                    </a>
                </div>
                <div className="box">
                    <img
                        height="180px"
                        width="150px"
                        src="/images/f-icon2.png"
                        alt="fundingorilla features"
                    />
                    <h3>Crowdfunding</h3>
                    <p>
                        We will help you with crowdfunding, raising smaller
                        amounts of money from a larger number of investors!
                    </p>
                    <a href="#" className="btn">
                        Read More
                    </a>
                </div>
                <div className="box">
                    <img
                        height="180px"
                        width="180px"
                        src="/images/f-icon3.png"
                        alt="fundingorilla features"
                    />
                    <h3>Special discounts for women</h3>
                    <p>
                        We want to do our part to encourage more woman founders
                        to showcase their talent so we’ve made a special
                        discount! <li>60% off on pro plans</li>
                        <li>0% Commission</li>
                    </p>
                    <a href="#" className="btn">
                        Read More
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Features;
