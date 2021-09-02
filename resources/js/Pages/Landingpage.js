import React from 'react'
import Sidebar from "../Layouts/Sidebar"
import "../../css/landing.css"
import { Link } from '@inertiajs/inertia-react';

function Landingpage() {
    return (
        <>
        <header>
        <div className="heading">Fundingorilla</div>
        <input type="checkbox" id="menu-bar"/>
        <label htmlFor="menu-bar" className="fas fa-bars"></label>
        <nav className="navbar">
        <a  href="#login"> <button className="btn">Login</button></a> 
        </nav>
      </header>
      <div className="he">Welcome!</div>

      <div className="body">
<Link href="/business">
       <div className="investor">
           <div className="land_heading">
              Fundraiser
           </div>
           <div className="para">
               <p>Hey Business owners We are here to help you scale and take your vision to the
                next level by eliminating the fund-raising hurdle.</p>
           </div>

       </div>
    </Link>
<Link href="/investor">
       <div className="business">
           <div className="land_heading">
               Investor
           </div>
           <div className="para">
               <p>Hey Investors,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto voluptatum ipsam consequuntur beatae a accusantium itaque soluta totam officia. 
               </p>
           </div>
       </div>
    </Link>
   </div>

   <footer className="foot">
       &copy;All right reseved @fundingorilla
   </footer>
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
    </>
    )
}
// Landingpage.layout = (page) => <Sidebar title="Fundingorilla" children={page} />;
export default Landingpage
