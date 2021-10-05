import React, { useEffect, useState } from 'react';
import DataShow from '../DataShow/DataShow';
import Footer from '../Footer/Footer';
import './Home.css'
import course1 from '../../images/cafeteria.jpg';
import course2 from '../../images/liabrary.jpg';
import course3 from '../../images/basketball.jpg';
const Home = () => {
    const [team,setTeam]=useState([])

    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])
    console.log(team)
    const designs= {
      width: '18rem'
  }
    return (
        <div>
          <div>
          <section className="facilities">
    <h1 className="text-info">Our Facilities</h1>
   <h6>this facility is very good </h6>
    
  

    {/* facility  */}
  <div className="row">
    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={course1} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 className="text-danger">World Class Library</h3>
            <p>The DIU library collections are a true collaborative effort. They are the foundation upon which a student's education is built and form the cornerstone of DIU research efforts. .</p>
  </div>
</div>
    </div>


    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={course2} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 className="text-danger">Largest Play Ground</h3>
            <p>The DIU play ground is very beautiful and the big place. They are the foundation upon which a student's education is built and form the cornerstone of DIU research efforts. </p>
  </div>
</div>
    </div>


    <div className="col-lg-4">
    <div class="card" style={designs}>
  <img src={course3} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h3 className="text-danger">Testy and Healthy</h3>
            <p>To make the canteen luxurious, comfortable and specious and to give the students better services and provide good quality food with affordable price.</p>
  </div>
</div>
    </div>


  </div>

</section>


          </div>
         
          <div className="container">
            <h1 className="mt-5 text-info">Services</h1>
            <div className="row">
            {
                  team.map(users=><DataShow 
                    key={users.name} users={users}></DataShow>)
              }
            </div>
          </div>
          
  
          <Footer></Footer>
        </div>
        
    );
};

export default Home;