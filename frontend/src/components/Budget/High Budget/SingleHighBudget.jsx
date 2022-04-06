import React from 'react';
import './SingleHighBudget.css';

const SingleHighBudget = ({ product }) => {
  console.log(product.category);
  return (
    <>
      <div className='product-box'>
        <div className='upper-box'>
          <img src={product.picture} alt='' />
        </div>
        <div className='lower-box'>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <button className='btn-1'>View Detail</button>
        </div>
      </div>
    </>
  );
};

export default SingleHighBudget;
