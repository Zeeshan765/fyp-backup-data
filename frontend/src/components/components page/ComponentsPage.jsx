import React, { useState } from 'react';

import SingleComponent from './SingleComponent';
import apiService from '../../services/ApiService';
import './ComponentsPage.css';
const ComponentsPage = () => {
  const [menuData, setMenuData] = useState([]);

  const getData = () => {
    apiService.getComponents().then((res) => {
      setMenuData(res.data);
    });
  };
  React.useEffect(getData, []);

  const filterResult = (category) => {
    apiService.get('/api/components/' + category).then((res) => {
      console.log(res.data);
      setMenuData(res.data);
    });
  };
  return (
    <>
      <div className='main-title'>Components</div>
      <div className='peripheral-container'>
        <div className='left-container'>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Processor');
            }}
          >
            Processor
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Gpu');
            }}
          >
            GPU
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Motherboard');
            }}
          >
            MotherBoard
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Psu');
            }}
          >
            PSU
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Hdd');
            }}
          >
            HDD
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Ssd');
            }}
          >
            SSD
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Ram');
            }}
          >
            RAM
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Casing');
            }}
          >
            CASING
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Cooler');
            }}
          >
            COOLER
          </button>
          <button className='left-btn' onClick={() => getData()}>
            ALL
          </button>
        </div>
        <div className='right-container'>
          {menuData.map((data, index) => (
            <SingleComponent key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
