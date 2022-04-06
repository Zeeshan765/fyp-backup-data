import React from "react";
import { useDispatch } from "react-redux";
import { addPSU } from "../../../Redux/cartRedux";
function PSUComp({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card-container">
        <div className="card-upper-part">
          <img src={product.picture} alt="" />
        </div>
        <div className="card-lower-part">
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <button
            className="view-btn"
            onClick={() => {
              dispatch(addPSU(product));
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default PSUComp;
