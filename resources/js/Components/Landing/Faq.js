import React from "react";

function Faq() {
    return (
        <section className="review" id="review">
            <div className="container">
                <h1 className="heading">Frequently Asked Questions</h1>
                <div className="item-4">
                    <div className="accordion">
                        <div className="title">How it works ?</div>
                        <div className="icon">+</div>
                    </div>
                    <div className="panel">
                        <p>
                            On this platform you can raise funds for your
                            business . You can make a post which will reach to
                            the investors who would like to invest in your
                            business idea .
                        </p>
                    </div>
                </div>
                <div className="item-1">
                    <div className="accordion">
                        <div className="title">How To make a post?</div>
                        <div className="icon">+</div>
                    </div>
                    <div className="panel">
                        <p>
                            Click on + icon you will see on your dashboard
                            screen there you will need to fill the form by
                            filling all the informations give then your request
                            will be reviwed and then will be posted .
                        </p>
                    </div>
                </div>
                <div className="item-2">
                    <div className="accordion">
                        <div className="title">
                            What is the minimum age requirement ?
                        </div>
                        <div className="icon">+</div>
                    </div>
                    <div className="panel">
                        <p>
                            The minimum age requirement is 15 years anyone above
                            it can make a post .
                        </p>
                    </div>
                </div>
                <div className="item-3">
                    <div className="accordion">
                        <div className="title">
                            What all information is required for making a post ?
                        </div>
                        <div className="icon">+</div>
                    </div>
                    <div className="panel">
                        <p className="mke">
                            {" "}
                            the following informations are required to make a
                            post <li>first name</li>
                            <li>last name</li>
                            <li>email</li>
                            <li>mobile number</li>
                            <li>address proof</li>
                            <li>company's name</li>
                            <li>business plan</li>
                            <li>previous year income tax return</li>
                            <li>business must be regestered</li>
                            <li>identity proof</li>
                        </p>
                    </div>
                </div>
                <div className="item-2">
                    <div className="accordion">
                        <div className="title">
                            What price does we cost you{" "}
                        </div>
                        <div className="icon">+</div>
                    </div>
                    <div className="panel">
                        <p>
                            The listing is absolutely{" "}
                            <span className="free">free</span> . You will need
                            to pay 1.9% Commission on the money you have raised
                            through the platform.
                        </p>
                    </div>
                </div>
                <div className="item-2">
                    <div className="accordion">
                        <div className="title">
                            How much time does it take to get a post approved?
                        </div>
                        <div className="icon">+</div>
                    </div>
                    <div className="panel">
                        <p>
                            It can take upto 48 hours to get the post approved.
                        </p>
                    </div>
                </div>
                <a href="#feedback">
                    <button className="btn feed">
                        Still got any Questions?
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Faq;
