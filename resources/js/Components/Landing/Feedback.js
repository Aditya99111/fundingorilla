import React from "react";

function Feedback() {
    return (
        <section className="contact" id="feedback">
            <div className="image">
                <img
                    height="400px"
                    width="400px"
                    src="/images/feedback.svg"
                    alt="feedback_img"
                />
            </div>
            <form action="POST" name="feedback" data-netlify="true">
                <h1 className="heading">We'd love your feedback</h1>
                <div className="inputBox">
                    <input name="name" type="text" required />
                    <label>Name</label>
                </div>
                <div className="inputBox">
                    <input name="email" type="email" required />
                    <label>Email</label>
                </div>
                <div className="inputBox">
                    <textarea
                        name="message"
                        required
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <label>Message</label>
                </div>
                <input type="submit" className="btn" value="send message" />
            </form>
        </section>
    );
}

export default Feedback;
