import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>About us</h3>
                    <p>
                        {" "}
                        A platform which will help you raise funding for your
                        business
                    </p>
                </div>
                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#review">FAQ</a>
                    <a href="#feedback">Contact</a>
                </div>
                <div className="box">
                    <h3>Follow us</h3>
                    <a href="#" target="_blank" title="Facebook">
                        Facebook
                    </a>
                    <a href="#" target="_blank" title="Instagram">
                        Instagram
                    </a>
                    <a href="#" target="_blank" title="pinterest">
                        Pinterest
                    </a>
                    <a href="#" target="_blank" title="Twitter">
                        Twitter
                    </a>
                </div>
                <div className="box">
                    <h3>Contact Info</h3>
                    <div className="info">
                        <i className="fas fa-envelope"></i>
                        <p>
                            {" "}
                            fundingorilla@gmail.com <br />{" "}
                            adityamittal471@gmail.com{" "}
                        </p>
                    </div>
                    <div className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        <p> gurgaon, india - 122001 </p>
                    </div>
                </div>
            </div>
            <h1 className="credit">
                {" "}
                &copy; Copyright @2021 by Fundingorilla{" "}
            </h1>
        </div>
    );
}

export default Footer;
