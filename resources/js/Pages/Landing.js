import React from 'react'
import "../../css/landing.css"


function Landing() {
  let acc = document.getElementsByClassName('accordion')
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      let panel = this.nextElementSibling
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove('open')
        this.getElementsByClassName('icon')[0].innerHTML = '+';}
      else {
        for (let x = 0; x < acc.length; x++) {
          acc[x].classList.remove('open')
          acc[x].nextElementSibling.style.maxHeight = null;
          acc[x].getElementsByClassName('icon')[0].innerHTML = '+';}
        panel.style.maxHeight = panel.scrollHeight + 'px';
        this.classList.toggle('open')
        this.getElementsByClassName('icon')[0].innerHTML = '-'}})}
    return (

  <div id="business">
  <header>
<a href="#" className="logo"><span>Funding</span>orilla</a> 
<input type="checkbox" id="menu-bar"/>
<label htmlFor="menu-bar" className="fas fa-bars"></label>
<nav className="navbar">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#features">Features</a>
  <a href="#review">FAQ</a>
  <a  href="#feedback">Contact</a>
<a href="#signup"> <button  className="btn sign">Signup</button></a> 
<a href="#login"> <button className="btn log">Login</button></a> 
</nav>
</header>
<section className="home" id="home">
<div className="content">
  <h3>content for investors <span>will add afterwards</span></h3>
  <p>We know you are smart and intelligent, and have the billion dollar idea which will shape the future! So we are here to help you raise funds for your business!</p>
  <a href="#signup" className="btn">Join now</a>
</div>
<div className="image">
  {/* <img height="400px" width="400px" src="../../../images/about].svg" alt="business funding"/> */}
</div>
</section>
<section className="about" id="about">
<h1 className="heading"> about us </h1>
<div className="column">
  <div className="image">
    {/* <img style="padding-right: 100px;" height="400px" width="400px"src="images/about].svg" alt="funding"/> */}
  </div>
  <div className="content">
    <h3>A Platform That Will Be Your Startup’s New Best Friend
    </h3>
    <p>Hey folk , We know you are smart and intelligent and has the billion Dollar idea which will shape the future
      .</p>
    <p> Presenting a platform which will help you raise funding for your business to scale up </p>
    <div className="buttons">
      <a href="#signup" className="btn">Join Now </a>
    </div>
  </div>
</div>
</section>
<section className="features" id="features">
<h1 className="heading"> features </h1>
<div className="box-container">
  <div className="box">
    {/* <img  height="180px" width="210px" src="images/f-icon1.png" alt="fundingorilla features"/> */}
    <h3>Reach investors who believe in your idea!</h3>
    <p>We’ll help you reach the right investors who want to help your idea and business grow!

    </p>
    <a href="#" className="btn">Read More</a>
  </div>
  <div className="box">
    {/* <img height="180px" width="150px" src="images/f-icon2.png" alt="fundingorilla features"/> */}
    <h3>Crowdfunding</h3>
    <p>We will help you with crowdfunding, raising smaller amounts of money from a larger number of investors!</p>
    <a href="#" className="btn">Read More</a>
  </div>
  <div className="box">
    {/* <img height="180px" width="180px"src="images/f-icon3.png" alt="fundingorilla features"/> */}
    <h3>Special discounts for women</h3>
    <p>We want to do our part to encourage more woman founders to showcase their talent so we’ve made a special discount! <li>60% off on pro plans</li>
      <li>0%
        Commission</li>
    </p>
    <a href="#" className="btn">Read More</a>
  </div>
</div>
</section>
<div className="newsletter">
<h3>Subscribe For business tips</h3>
<p>Subscribe to our newsletter for daily business related updates ,tips, and tricks to grow your business.
  </p>
<form action="POST" data-netlify="true" name="newsletter">
  <input name="newslettermail" type="email" placeholder="enter your email"/>
  <input type="submit" value="Subscribe"/>
</form>
</div>
<section className="review" id="review">
<div className="container">
  <h1 className="heading">Frequently Asked Questions</h1>
  <div className="item-4">
    <div className="accordion">
      <div className="title">How it works ?</div>
      <div className="icon">+</div>
    </div>
    <div className="panel">
      <p >On this platform you can raise funds for your business . You can make a
        post which will reach to the investors who would like to invest in your business idea .</p>
    </div>
  </div>
  <div className="item-1">
    <div className="accordion">
      <div className="title">How To make a post?</div>
      <div className="icon">+</div>
    </div>
    <div className="panel">
      <p>Click on + icon you will see on your dashboard screen there you will need to fill the form by filling all
        the informations give then your request will be reviwed and then will be posted .</p>
    </div>
  </div>
  <div className="item-2">
    <div className="accordion">
      <div className="title">What is the minimum age requirement ?</div>
      <div className="icon">+</div>
    </div>
    <div className="panel">
      <p>The minimum age requirement is 15 years anyone above it can make a post .</p>
    </div>
  </div>
  <div className="item-3">
    <div className="accordion">
      <div className="title">What all information is required for making a post ?</div>
      <div className="icon">+</div>
    </div>
    <div className="panel">
      <p className="mke"> the following informations are required to make a
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
      <div className="title">What price does we cost you </div>
      <div className="icon">+</div>
    </div>
    <div className="panel">
      <p>The listing is absolutely <span className="free">free</span> . You will need to pay 1.9% Commission on the
        money you have raised through the platform.</p>
    </div>
  </div>
  <div className="item-2">
    <div className="accordion">
      <div className="title">How much time does it take to get a post approved?</div>
      <div className="icon">+</div>
    </div>
    <div className="panel">
      <p>It can take upto 48 hours to get the post approved.</p>
    </div>
  </div>
<a href="#feedback"><button className="btn feed" >Still got any Questions?</button></a>
</div>
</section>
<section className="contact" id="feedback">
<div className="image">
  {/* <img height="400px" width="400px" src="images/feedback.svg" alt="feedback_img"/> */}
</div>
<form action="POST" name="feedback" data-netlify="true">
  <h1 className="heading">We'd love your feedback</h1>
  <div className="inputBox">
    <input name="name" type="text" required/>
    <label>Name</label>
  </div>
  <div className="inputBox">
    <input name="email" type="email" required/>
    <label>Email</label>
  </div>
  <div className="inputBox">
    <textarea name="message" required name="" id="" cols="30" rows="10"></textarea>
    <label>Message</label>
  </div>
  <input type="submit" className="btn" value="send message"/>
</form>
</section>
<div className="footer">
<div className="box-container">
  <div className="box">
    <h3>About us</h3>
    <p> A platform which will help you raise funding for your business</p>
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
    <a href="#" target="_blank" title="Facebook">Facebook</a>
    <a href="#" target="_blank" title="Instagram">Instagram</a>
    <a href="#" target="_blank" title="pinterest">Pinterest</a>
    <a href="#" target="_blank" title="Twitter">Twitter</a>
  </div>
  <div className="box">
    <h3>Contact Info</h3>
    <div className="info">
      <i className="fas fa-envelope"></i>
      <p> fundingorilla@gmail.com <br/> adityamittal471@gmail.com </p>
    </div>
    <div className="info">
      <i className="fas fa-map-marker-alt"></i>
      <p> gurgaon, india - 122001 </p>
    </div>
  </div>
</div>
<h1 className="credit"> &copy; Copyright @2021 by Fundingorilla </h1>
</div>
<div id="signup" className="overlay">
<div className="popup">
  <a className="cross" href="#_">X</a>
    <h1 className="heading">Welcome!</h1>
    <div className="input_fields"><input className="input" type="text"placeholder="Name"/>
    <input className="input" type="email"placeholder="Email"/>
    <input className="input" type="number"placeholder="Mobile Number"/>
    <input className="input" type="password"placeholder="Password"/>
    <div className="select">

    </div>
    </div>
    <div className="login">
    <a href="#" className="btn">Signup</a>
</div>
</div>
</div>

<div id="login" className="overlay">
<div className="popup">
<a className="cross" href="#_">X</a>
  <h1 className="heading">Welcome Back</h1>
  <div className="input_fields">
  <input className="input" type="email"placeholder="Email"/>
  <input className="input" type="password"placeholder="Password"/>

  </div>
  <div className="login">
  <a href="#" className="btn">Login</a>
</div>
</div>
</div>

</div>
       
       )
}
export default Landing
