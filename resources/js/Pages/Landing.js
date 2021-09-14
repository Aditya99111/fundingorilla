import About from "@/Components/Landing/About";
import Faq from "@/Components/Landing/Faq";
import Features from "@/Components/Landing/Features";
import Feedback from "@/Components/Landing/Feedback";
import Footer from "@/Components/Landing/Footer";
import Hero from "@/Components/Landing/Hero";
import Navbar from "@/Components/Landing/Navbar";
import NewsForm from "@/Components/Landing/NewsForm";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import "../../css/landing.css";

function Landing() {
    const register = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const login = useForm({
        email: "",
        password: "",
    });

    function handleRegisterChange(e) {
        register.setData(e.target.name, e.target.value);
    }

    function handleLoginChange(e) {
        login.setData(e.target.name, e.target.value);
    }

    function handleRegisterSubmit(e) {
        e.preventDefault();
        register.post("/register");
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        login.post("/login");
    }

    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("open");
                this.getElementsByClassName("icon")[0].innerHTML = "+";
            } else {
                for (let x = 0; x < acc.length; x++) {
                    acc[x].classList.remove("open");
                    acc[x].nextElementSibling.style.maxHeight = null;
                    acc[x].getElementsByClassName("icon")[0].innerHTML = "+";
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.toggle("open");
                this.getElementsByClassName("icon")[0].innerHTML = "-";
            }
        });
    }
    return (
        <div id="business">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Faq />
            <NewsForm />
            <Feedback />
            <Footer />
            <div id="signup" className="overlay">
                <div className="popup">
                    <a className="cross" href="#_">
                        X
                    </a>
                    <h1 className="heading">Welcome!</h1>
                    <form
                        onSubmit={handleRegisterSubmit}
                        className="input_fields"
                    >
                        <input
                            className="input"
                            type="text"
                            placeholder="Name"
                            value={register.data.name}
                            name="name"
                            onChange={handleRegisterChange}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={register.data.username}
                            onChange={handleRegisterChange}
                        />
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={register.data.email}
                            onChange={handleRegisterChange}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={register.data.password}
                            onChange={handleRegisterChange}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Password Confirmation"
                            name="password_confirmation"
                            value={register.data.password_confirmation}
                            onChange={handleRegisterChange}
                        />
                        <div className="select"></div>
                        <div className="login">
                            <button className="btn">Signup</button>
                        </div>
                    </form>
                </div>
            </div>

            <div id="login" className="overlay">
                <div className="popup">
                    <a className="cross" href="#_">
                        X
                    </a>
                    <h1 className="heading">Welcome Back</h1>
                    <form onSubmit={handleLoginSubmit} className="input_fields">
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={login.data.email}
                            onChange={handleLoginChange}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={login.data.password}
                            onChange={handleLoginChange}
                        />
                        <div className="login">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Landing;
