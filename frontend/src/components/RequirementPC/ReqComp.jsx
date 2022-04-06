import React from 'react';
import { useDispatch } from 'react-redux';
import { handleHigh, handleLow, handleMed } from '../../Redux/requirementRedux';
import low from "../../Assets/low.jpg"
import med from "../../Assets/med.jpg"
import high from "../../Assets/budgetpc3.png"
import "./ReqComp.css";
const ReqComp = () => {
  const dispatch = useDispatch();
  return(
      <>
<div className="pc-container">
<div  className="product-box">
      <div 
      // onClick={() => sugg(cat)}
        className="upper-box">
       <img src= {low} alt="" />  
      </div>
      <div   className="lower-box">
        <h3>Low PC</h3>
        <h4>Price Range: 30000-45000</h4>
        <p>From office use to Low end gaming</p>
         <button  onClick={() =>   dispatch(handleLow())}   className="btn-1">Check</button>
      </div>
     
      
  </div>

  <div  className="product-box">
      <div 
        className="upper-box">
       <img src= {med}  alt="" />
      </div>
      <div   className="lower-box">
        <h3>Medium PC</h3>
        <h4>Price Range: 50000-80000</h4>
        <p>For Intermediate gaming and software developement</p>
         <button  onClick={() =>dispatch(handleMed())}   className="btn-1">Check</button>
      </div>
     
      
  </div>

<div>
  <div  className="product-box">
      <div 
    
        className="upper-box">
       <img src= {high}  alt="" />
      </div>
      <div   className="lower-box">
        <h3>High End PC</h3>
        <h4>Price Range: 90000-120000+</h4>
        <p>For High End Gaming, Streaming and 3d Modelling</p>
         <button  onClick={() =>dispatch( handleHigh())}   className="btn-1">Check</button>
      </div>
     
      
  </div>

  </div>
  </div>
      </>
  );
};

export default ReqComp;
