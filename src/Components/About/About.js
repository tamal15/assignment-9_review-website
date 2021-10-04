import React from 'react';
import './About.css'
import about1 from '../../images/liabrary.jpg'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <section className="about-us">

                <div className="row">
                    <div className="about-col">
                        <h1>We are the Daffodil International University</h1>
                        <p>Daffodil International University is a private higher education institution located in Dhanmondi, Dhaka, Bangladesh. ... The ranked within the top 400 universities in the world in the Times Higher Education University Impact Rankings for 2020, and came in 37th place </p>

                       
                        <button className="hero-btn red-btn">Explore Now</button>
                    </div>
                    <div className="about-col">
                         <img src={about1} alt="" />

                    </div>
                </div>

            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;