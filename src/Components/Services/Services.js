import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import ServiceData from '../ServiceData/ServiceData';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
        <div>
        <input type="text" placeholder="input value search" />
          <button className="search">Search</button>
        </div>
        <div className="container">
          <div className="row">
          {
                services.map(service=><ServiceData service={service}></ServiceData>)
            }
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Services;