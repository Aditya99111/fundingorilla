import React from "react";

function NewsForm() {
    return (
        <div className="newsletter">
            <h3>Subscribe For business tips</h3>
            <p>
                Subscribe to our newsletter for daily business related updates
                ,tips, and tricks to grow your business.
            </p>
            <form action="POST" data-netlify="true" name="newsletter">
                <input
                    name="newslettermail"
                    type="email"
                    placeholder="enter your email"
                />
                <input type="submit" value="Subscribe" />
            </form>
        </div>
    );
}

export default NewsForm;
