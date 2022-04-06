import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/cartRedux";
import "./border.css";
//import $ from "jquery";
function ProcessorsComp({ product }) {
  const dispatch = useDispatch();
 
  return (
    <>
      <div  className="card-container">
        <div className="card-upper-part">
          <img src={product.picture} alt="" />
        </div>
        <div className="card-lower-part">
          <h3>{product.name}</h3>
          <p>{product.company}</p>
          <h4>{product.price}</h4>
        
          <button
            onClick={() => {
              dispatch(addProduct(product));
            }}
            className="view-btn"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default ProcessorsComp;
