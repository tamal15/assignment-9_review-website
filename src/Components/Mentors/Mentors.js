import React from 'react';
import './Mentors.css'
import trainer1 from '../../images/trainer1.jpg';
import trainer2 from '../../images/trainer2.jpg';
import trainer3 from '../../images/trainer3.jpg';
import trainer4 from '../../images/trainer4.jpg';
import trainer5 from '../../images/trainer5.jpg';
import trainer6 from '../../images/trainer6.jpg';
import Footer from '../Footer/Footer';

const Mentors = () => {
    const designs= {
        width: '18rem'
    }
    return (
        <div>

<div>
    
              
    <section className="container">
    <h1 className="heading mt-5">Department of Computer Science and Engineering</h1>
    <div className="row">
    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={trainer1} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 class="user-name">Professor Dr. Md Zakir </h3>
                <h5>Professor and Director</h5>
  </div>
</div>
    </div>


    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={trainer2} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 class="user-name">Professor Dr. Mostafa  </h3>
                <h5>Professor & Dean</h5>
  </div>
</div>
    </div>


    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={trainer3} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 class="user-name">Maruful Tamal </h3>
                <h5>Visiting Professor</h5>
  </div>
</div>
    </div>


  </div>
    </section>



    <section className="container mb-5">
    <h1 className="heading mt-5">Department of Electrical and Engineering</h1>
    <div className="row">
    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={trainer4} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 class="user-name">Dr. Bibhuti Roy </h3>
                        <h5>Visiting Professor</h5>
  </div>
</div>
    </div>


    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={trainer5} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 class="user-name">Mr. Md. Tarek Habib  </h3>
                        <h5>Assistant Professor</h5>
  </div>
</div>
    </div>


    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={trainer6} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 class="user-name">Mr. Arif Mahmud </h3>
                        <h5>Visiting Professor</h5>
  </div>
</div>
    </div>


  </div>
    </section>



        </div>
        <Footer></Footer>
            
        </div>
    );
};

export default Mentors;







  