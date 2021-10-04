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
    return (
        <div>
          <div>
          <section className="facilities">
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ad at totam tempore consequatur impedit.</p>
    
    <div className="row">
        <div className="facilities-col">
          <img src={course1} alt="" />
            <h3>World Class Library</h3>
            <p>The DIU library collections are a true collaborative effort. They are the foundation upon which a student's education is built and form the cornerstone of DIU research efforts. .</p>
        </div>

        <div className="facilities-col">
           <img src={course2} alt="" />
            <h3>Largest Play Ground</h3>
            <p>The DIU play ground is very beautiful and the big place. They are the foundation upon which a student's education is built and form the cornerstone of DIU research efforts. </p>
        </div>

        <div className="facilities-col">
          <img src={course3} alt="" />
            <h3>Testy and Healthy</h3>
            <p>To make the canteen luxurious, comfortable and specious and to give the students better services and provide good quality food with affordable price.</p>
        </div>
    </div>

</section>


          </div>
         
          <div className="container">
            <div className="row">
            {
                  team.map(users=><DataShow users={users}></DataShow>)
              }
            </div>
          </div>
          <Footer></Footer>
        </div>
        
    );
};

export default Home;