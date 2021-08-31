import React from 'react'
import Sidebar from "../Layouts/Sidebar"
import "../../css/create.css"
function Create() {
    return (
        <div className="maincontent">
            <div className="container">
                <div className="title">Regestration</div>
                <div className="content">
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <span className="details">First Name</span>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Last Name</span>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Phone Number</span>
                                <input type="number" placeholder="Enter your number" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Company Name</span>
                                <input type="text" placeholder="Enter your Company Name" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Address</span>
                                <input type="text" placeholder="Enter your Address" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Address Proof</span>
                                <div className="file_input">
                                    <input
                                        type="file"
                                        name="file-input"
                                        id="file_input"
                                        className="file_input__input"
                                    />
                                    <label className="file_input__label" htmlFor="file-input">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="upload"
                                            className="svg-inline--fa fa-upload fa-w-16"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                            ></path>
                                        </svg>
                                        <span>Upload file</span></label>
                                </div>
                            </div>
                            <div className="input_box">
                                <span className="details">Identity Proof</span>
                                <div className="file_input">
                                    <input
                                        type="file"
                                        name="file-input"
                                        id="file_input"
                                        className="file_input__input"
                                    />
                                    <label className="file_input__label" htmlFor="file-input">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="upload"
                                            className="svg-inline--fa fa-upload fa-w-16"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                            ></path>
                                        </svg>
                                        <span>Upload file</span></label>
                                </div>
                            </div>
                            <div className="textarea">
                                <span className="details">Description About You</span>
                                <textarea className="desc" name="heading" id="" cols="43" rows="5" placeholder="Description goes here!"></textarea>
                            </div>

                            <div className="input_box">
                                <span className="details">Heading</span>
                                <textarea className="heading" name="heading" id="" cols="30" rows="2" placeholder="A catchy title here!"></textarea>
                            </div>
                            <div className="textarea">
                                <span className="details">Project Description</span>
                                <textarea className="desc" name="heading" id="" cols="43" rows="5" placeholder="Explain Your Idea"></textarea>
                            </div>
                            <div className="input_box">
                                <span className="details">Business Plan</span>
                                <div className="file_input">
                                    <input
                                        type="file"
                                        name="file-input"
                                        id="file_input"
                                        className="file_input__input"
                                    />
                                    <label className="file_input__label" htmlFor="file-input">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="upload"
                                            className="svg-inline--fa fa-upload fa-w-16"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                            ></path>
                                        </svg>
                                        <span>Upload file</span></label>
                                </div>
                            </div>
                            <div className="input_box">
                                <span className="details">Company Valuation</span>
                                <input type="text" placeholder="Enter your Address" required />
                            </div>
                            <div className="input_box">
                                <span className="details">Equity</span>
                                <div className="raise"><input type="number" placeholder="Enter the Equity" required />

                                </div>
                            </div>
                            <div className="input_box">
                                <span className="details">Amount</span>
                                <div className="raise"><input type="number" placeholder="Enter the Amonut(In USD)" required />

                                </div>
                            </div>

                        </div>
                       
                        <div className="button">
                            <input type="submit" value="Post" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
Create.layout = (page) => <Sidebar title="Create" children={page} />;

export default Create


