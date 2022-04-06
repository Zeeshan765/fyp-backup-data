import React from "react";
import { useHistory } from "react-router";
import mainvideo from "../../Assets/mainvideo.mp4";
import Circle from "../../Assets/Circle.svg";
import fp from "../../Assets/fp.jpg";
import TrendingProducts from "./TrendingProducts";
import "./Landing.css";


const Landing = () => {
  console.log(localStorage.getItem('token'));
  const history = useHistory();

/* Click on Start your  Build Button */ 
  const handleClick = () =>{
    history.push ('/selection');
  }


  
  return (
    <div className="land-cointainer">
      <div className="video-section">
        <video
          src={mainvideo}
          muted
          playsInline
          autoPlay
          loop
          className="bg-video"
        ></video>
        <img src={Circle} alt="circle" className="circle-bg" />
        <div className="content-section">
          <div className="left-content">
            <h2>Personal Computers Made Easy</h2>
            <h1>
              All PCs You need in One Marketplace The Best Place to Build  
              <span className="GradientText">Custom PCs</span>
              
            </h1>

            <button className="btn" onClick={handleClick}>Start Your Build</button>
          </div>
          <div className="right-content">
            <img src={fp} alt="circle1" className="bchain-img" />
          </div>
        </div>
        
    </div>

    

        <div className="trend-container">
            <div className="trend-heading">
            <h1>Trending Products</h1>
            </div>
            <div className="product-container">
              <TrendingProducts/>
            </div>
            
        </div>
        
      </div>
      




  );
};

export default Landing;
