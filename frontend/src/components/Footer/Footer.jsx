import React from 'react';

import "./Footer.css";

import { FaPhone,FaFacebook,FaInstagram,FaGoogle,FaHome } from 'react-icons/fa';

const Footer = () => {
  

/* Click on Budget Box It Navigate to budget page */ 

  return (
    
    
    <div className='footer-container' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div className='moc'>
       <h2 className='title'>Multiverse of Computers</h2>
     
       <h4 className='desc'>Computer building made easy for you!. A single website to help you in building and customizing your computer.</h4>
       
       </div>
    <div className='contact'> <h2 className='title'>Contacts</h2> 
    <h4  className='desc'> <FaGoogle className='icon' url="https://google.com/sherbat60 "  /> sherbat60@gmail.com</h4>
   <h4 className='desc'><FaInstagram className='icon' url="https://instagram.com/sher_al1 "  /> sher_al1</h4> 
   <h4 className='desc'><FaFacebook className='icon' url="https://www.facebook.com/profile.php?id=100007289621370 "  /> Sher Ali Butt</h4> 
   <h4 className='desc'><FaPhone className='icon' /> 03225589072</h4> 
   <h4 className='desc'><FaHome className='icon' /> Comsats Lahore, Raiwind Road</h4> 
   <div > <h4 className='copyright' >Copyright © 2021 Multiverse of Computers. All rights reserved.</h4></div>
    </div>
    <div className='about'><h2 className='title'>About</h2> 
    <h4 className='desc'> Team</h4> 
    <h4 className='desc'> Services</h4> 
    <h4 className='desc'> Account</h4> 
    <h4 className='desc'> FAQs</h4>
    </div>
   
    
  </div>


 );
};

export default Footer;
