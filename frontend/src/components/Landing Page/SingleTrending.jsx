import React from "react";
import "./SingleTrending.css";
const SingleTrending = ({item}) => {
    console.log(item);
  return (
    <>
      <div className="card-container">
        <div className="card-upper-part">
          <img src={item.image} alt="" />
        </div>
        <div className="card-lower-part">
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
          <p>
            {item.description}
          </p>
          <button className="view-btn">View More</button>
        </div>
      </div>
    </>
  );
};

export default SingleTrending;
