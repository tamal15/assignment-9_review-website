import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import image1 from '../../images/asuliyacampus.jpg';
import image2 from '../../images/diu.png';
// import logo from '../../images/logo.png'

const Header = () => {
    return (
       <div className="container-data mt-2">
           <div className="row manubar-style btn-dark">
               <div className="col-lg-2">
                   <div className="logo">
                    {/* <img className="logos" src={logo} alt="" /> */}
                   </div>
               </div>

               <div className="menu-container">
                   <div className="col-lg-10">
                       <ul className="d-flex align-items-end justify-content-end">
                           <Link to="/home" className="menubar">
                               <li>Home</li>
                           </Link>
                           <Link to="/about" className="menubar">
                               <li>About</li>
                           </Link>
                           <Link to="/services" className="menubar">
                               <li>Services</li>
                           </Link>
                           <Link to="/courses" className="menubar">
                               <li>Courses</li>
                           </Link>
                           <Link to="/contact" className="menubar">
                               <li>Contact</li>
                           </Link>
                       </ul>
                   </div>
               </div>
           </div>


           {/* images style  */}

           <div className="image">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>International University</h5>
        <p>Making website is now one of the easiest thing in the world. you just need to learn Computer, Electrical,
Texttail, Software, BBA, Civil and good to go..</p>
        <button className="view bg-primary"> courses</button>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>International University</h5>
        <p>to learn Computer, Electrical,
Texttail, Software, BBA, Civil and good to go..</p>
        <button className="view bg-primary"> courses</button>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>International University</h5>
        <p>Making website is now one of the easiest thing in the world. you just need to learn Computer, Electrical,
Texttail, Software, BBA, Civil and good to go.</p>
        <button className="view bg-primary"> courses</button>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           </div>


 </div>

 










   

    );
};

export default Header;