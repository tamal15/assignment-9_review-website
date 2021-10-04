import React from 'react';
import contact from '../../images/contact.png'
import './Contact.css'
const Contact = () => {
    return (
        <div>
             <section id="contact us" class="contact-us">
      <h1>Contact US</h1>

     <div className="row">
         <div className="contact-col">
             <div>
                 <i className="fa fa-home"></i>
                 <span>
                     <h5>XYZ Road, ABC Building</h5>
                     <p>Dhanmondi, Dhaka</p>
                 </span>

             </div>

             <div>
              <i className="fas fa-home"></i>
              <span>
                  <h5>Office Name</h5>
                  <p>Alamin Thripics House</p>
              </span>

          </div>

             <div>
                 <i className="fas fa-envelope"></i>
                 <span>
                     <h5>info@marufultamal.com</h5>
                     <p>Email us your query</p>
                 </span>

             </div>

             <div>
                 <i className="fa fa-phone"></i>
                 <span>
                     <h5>+1 01746445559</h5>
                     <p>Tuesday to sunday, 10AM TO 6PM</p>
                 </span>

             </div>


             <div>
              <i className="fab fa-facebook"></i>
              <span>
                  <h5>Facebook</h5>
                  <p><a class="link text-dark" href="#">Facebook link</a></p>
              </span>

          </div>
         
            
            

         </div>
         
        <div class="col-lg-6 col-md-6 col-1 img">
         <img src={contact} alt="" />
        </div>

        
     </div>

 </section>


 
        </div>
    );
};

export default Contact;