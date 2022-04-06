import React from "react";
import { useDispatch } from "react-redux";
import { addRam } from "../../../Redux/cartRedux";
import "./RamComp.css"
function RamComp({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card-container">
        <div className="card-upper-part">
          <img src={product.picture} alt="" />
        </div>
        <div className="card-lower-part">
          <h3>{product.name}</h3>
          <p>{product.company}</p>
          <h4>{product.price}</h4>
        
        
          <div>
          <select
            name='ram'
            id='ram'
            className="ramDropDown"
            // onChange={(e) => {
            //   setCategory(e.target.value);
            // }}
          >
          
            <option value='4'>1x4</option>
            <option value='8'>2x4</option>
            <option value='8'>1x8</option>
            <option value='16'>2x8</option>
            <option value='16'>1x16</option>
            <option value='32'>2x16</option>
          </select></div>
          <button
            className="view-btn"
            onClick={() => {
              dispatch(addRam(product));
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default RamComp;
