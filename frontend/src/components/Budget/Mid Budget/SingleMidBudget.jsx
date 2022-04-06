import React from 'react';
//import cooler from "../../../Assets/mortar.jpg";
import "./SingleMidBudget.css";
const SingleMidBudget = ({data}) => {
  return (
  <>
  
 
    <div className="product-box">
      <div className="upper-box">
       <img src={data.image} alt="" />
      </div>
      <div className="lower-box">
        <h3>{data.name}</h3>
        <h4>{data.price}</h4>
        <p>{data.description}</p>
         <button className="btn-1">View Detail</button>
      </div>
    
      
  </div>
  </>
    );
};

export default SingleMidBudget;
