import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import image1 from '../../images/asuliyacampus.jpg';
import image2 from '../../images/diu.png';
import logo from '../../images/logo.png'

const Header = () => {
    return (
       <div className="container-data mt-2">
             <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
            <div class="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src={logo} alt="" width="50" height="49" class="d-inline-block align-text-top "/>
                <span class="ms-3 ">Internation University</span></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#home">Home</a> */}
                    <Link className="nav" to="/home">Home</Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#cow1">Cow</a> */}
                    <Link className="nav" to="/about">About</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav" to="/services">Services</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav" to="/courses">Course</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav" to="/contact">Contact</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav" to="/mentor">Mentors</Link>
                  </li>
                 
                
                </ul>
               
              </div>
            </div>
          </nav>





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
      <img  src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-box">
        <h5 className="text-box">International University</h5>
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