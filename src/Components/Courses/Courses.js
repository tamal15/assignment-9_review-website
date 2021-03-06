import React from 'react';
import './Courses.css';
import course from '../../images/certificate.jpg';
import Footer from '../Footer/Footer';


const Courses = () => {
    return (
        <div>
            
           <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <img src={course} alt="" />
                        <h2>Our Certificate & Online Programs For 2021</h2>

                        <p>The DIU Our Certificate & Online Programs For 2021. They are the foundation upon which a student's education is built and form the cornerstone of DIU research efforts</p>
                    </div>

                    <div className="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Computer Science Engineering</span>
                    <span>80</span>
                </div>
                <div>
                    <span>Electrical Engineering</span>
                    <span>60</span>
                </div>
                <div>
                    <span>Software Engineering</span>
                    <span>40</span>
                </div>
                <div>
                    <span>texttail Engineering</span>
                    <span>40</span>
                </div>
                <div>
                    <span>Macanical Engineering</span>
                    <span>45</span>
                </div>
                <div>
                    <span>BBA</span>
                    <span>50</span>
                </div>
                <div>
                    <span>Civil Engineering</span>
                    <span>60</span>
                </div>
            </div>
                </div>

            </section>
            <Footer></Footer>

</div>
    );
};

export default Courses;