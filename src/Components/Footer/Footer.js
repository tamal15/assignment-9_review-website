import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="left-container text-start">
                            <h1>International University</h1>
                            <div className="icons-container d-flex text-center">
                                <div className="icons">
                                <i class="fab fa-facebook-square"></i>
                                </div>
                                <div className="icons">
                                <i class="fab fa-youtube"></i>
                                </div>
                                <div className="icons">
                                <i class="fab fa-twitter-square"></i>
                                </div>
                                <div className="icons">
                                <i class="fab fa-instagram-square"></i>
                                </div>
                             
                            </div>
                            <p>this is the nice university and all teacher are helpful. and all course are very exicted are learning</p>
                                <p>
                                    <small>
                                        tamal @ copyright the design
                                    </small>
                                </p>
                        </div>
                      
                    </div>

                    <div className="col-lg-2">
                <div className="menu-container">
                <ul>
              <Link to="/home" className="footer-menubar">
               <li>Home</li>
               </Link>
              <Link to="/home" className="footer-menubar">
              <li>About</li>
               </Link>
               <Link to="/home" className="footer-menubar">
               <li>Services</li>
                </Link>
                <Link to="/home" className="footer-menubar">
                 <li>Courses</li>
                </Link>
               </ul>
           </div>

           </div>
           <div className="col-lg-5">
           <div className="right-footer-container">
               <h3>Sign up for the newsletter</h3>
               <input className="input" type="text" placeholder="enter email" />
               <div className="phone-icon">
               <i class="fas fa-phone-square"></i>
               <p>0173572929</p>
               </div>
           </div>
           </div>
           

                </div>
            </div>
        </div>
    );
};

export default Footer;




