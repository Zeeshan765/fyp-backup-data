import React from 'react'
import { useState } from 'react';
import Cart from './CustomCart'

import "./BuildCompleted.css";

export default function BuildCompleted() {
  const [cartDisplay, setcartDisplay] = useState(false)
  function showCart(){
   setcartDisplay(true)
  }
  function hideCart(){
    setcartDisplay(false)
   }
  return (
    <div><h3>Congratulations! You have successfully completed your build </h3>
   
   <button 
   onClick={showCart} className='viewbtn'>
     
      View My Build
    </button>
   {cartDisplay && <div><Cart/> <button  onClick={hideCart} className='viewbtn'>Close</button></div> }
   
    </div>
  )
}
