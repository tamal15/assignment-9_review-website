import React from 'react';
import './ServiceData.css'

const ServiceData = (props) => {
    const {name,img,price,text} =props.service;
    const designShow={
        width: '18rem'
    }
    return (
        <div className="col-lg-4 mb-5 mt-5 col-sm-12  ">
            <div className="card" style={designShow}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body body-designs">
      <h3>{name}</h3>
      <h4>price: {price}</h4>
    <p class="card-text">{text}.</p>
    <button className="button" onClick={()=>props.handleButton(props.persons)}> <i class="fas fa-arrow-circle-right"></i>Enroll Now</button>
  </div>

  
</div>
        </div>


// design 



    );
};

export default ServiceData;