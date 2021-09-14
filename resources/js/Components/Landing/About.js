import React from "react";

function About() {
    return (
        <section className="about" id="about">
            <h1 className="heading"> about us </h1>
            <div className="column">
                <div className="image">
                    <img
                        // style="padding-right: 100px;"
                        height="400px"
                        width="400px"
                        src="/images/about].svg"
                        alt="funding"
                    />
                </div>
                <div className="content">
                    <h3>
                        A Platform That Will Be Your Startup’s New Best Friend
                    </h3>
                    <p>
                        Hey folk , We know you are smart and intelligent and has
                        the billion Dollar idea which will shape the future .
                    </p>
                    <p>
                        {" "}
                        Presenting a platform which will help you raise funding
                        for your business to scale up{" "}
                    </p>
                    <div className="buttons">
                        <a href="#signup" className="btn">
                            Join Now{" "}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
