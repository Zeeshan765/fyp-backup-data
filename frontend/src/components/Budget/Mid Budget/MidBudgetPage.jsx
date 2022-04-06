import React, { useState } from 'react';
import "./MidBudgetPage.css";

import budgetdata from "../budgetdata.js"
import SingleMidBudget from './SingleMidBudget';

const MidBudgetPage = () => {
  const[menuData,setMenuData] = useState(budgetdata);

  return (
  

  <>
  <div className="midbudget-container">
  { menuData.filter((data) =>
(data.category === "Mid Range Budget")
  ).map((data, index) => (
         
    <SingleMidBudget key={index} data={data} />
  
   ))}

  
  </div>
  

 
  </>);
};

export default MidBudgetPage;

/*
{ itemData.filter((data) =>
(data.category === "Low Budget")
  ).map((data, index) => (
         
    <SingleLowBudget key={index} data={data} />
  
   ))}
*/