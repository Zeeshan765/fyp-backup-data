import React, { useState } from 'react';
import './PeripheralPage.css';

import apiService from '../../services/ApiService';
import Singleperipheral from './Singleperipheral';

const PeripheralPage = () => {
  const [menuData, setMenuData] = useState([]);

  //Get Data
  const getData = () => {
    apiService.getProducts().then((res) => {
      setMenuData(res.data);
      // console.log(res.data);
    });
  };
  React.useEffect(getData, []);

  const filterResult = (category) => {
    apiService.get('/api/products/' + category).then((res) => {
      console.log(res.data);
      setMenuData(res.data);
    });
  };

  //Filter Data Here
  // const filterResult = (catName) => {
  //   const result = menuData.filter((currData) => {
  //     return currData.category === catName;
  //   });
  //   console.log(catName);
  //   console.log(result);
  //   setCatData(result);
  //   console.log(catData);
  // };

  return (
    <>
      <div className='main-title'>Peripherals</div>
      <div className='peripheral-container'>
        <div className='left-container'>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Keyboard');
            }}
          >
            KeyBoard
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Mouse');
            }}
          >
            Mouse
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('controller');
            }}
          >
            Controller
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Monitor');
            }}
          >
            Monitor
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Headphone');
            }}
          >
            Headphones
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('speaker');
            }}
          >
            Speakers
          </button>
          <button
            className='left-btn'
            onClick={() => {
              filterResult('Mic');
            }}
          >
            Mic
          </button>
          <button className='left-btn' onClick={() => getData()}>
            All
          </button>
        </div>
        <div className='right-container'>
          {menuData.map((data, index) => (
            <Singleperipheral key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PeripheralPage;
