import React from 'react'

export default function CustomCartComp({item}) {
    
  return   (
    <>
      <div   className="card-container">
        <div className="card-upper-part">
          <img src={item.picture} alt="" />
        </div>
        <div className="card-lower-part">
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
          <p>
            {item.description}
          </p>
         
        </div>
      </div>
    </>
  );
}
