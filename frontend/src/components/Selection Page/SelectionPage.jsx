import React from 'react';
import { useHistory } from 'react-router';
import custompc from '../../Assets/custompc.png';
import requirmentpc from '../../Assets/requirmentpc.png';
import budgetpc from '../../Assets/budgetpc.png';
import './SelectionPage.css';

const SelectionPage = () => {
  const history = useHistory();

  /* Click on Budget Box It Navigate to budget page */
  const handlebudget = () => {
    history.push('/budget');
  };
  const handleRequirement = () => {
    history.push('/requirement');
  };

  const handleCustom = () => {
    history.push('/Custom-Screen');
  };

  return (
    <div className='selection-container'>
      <div className='selection-wrapper'>
        <div className='selection-box' onClick={handleCustom}>
          <div className='first-part'>
            <img src={custompc} alt='' />
          </div>
          <div className='last-part'>
            <h2>Fully Customised PC</h2>
            <h4>
              Choose desired components and build customised computer from
              scratch
            </h4>
          </div>
        </div>

        <div className='selection-box' onClick={handleRequirement}>
          <div className='first-part'>
            <img src={requirmentpc} alt='' />
          </div>
          <div className='last-part'>
            <h2>Requirements Based</h2>
            <h4>
              Get a Computer system according to your requirements such as
              Resolution and FPS
            </h4>
          </div>
        </div>

        <div className='selection-box' onClick={handlebudget}>
          <div className='first-part'>
            <img src={budgetpc} alt='' />
          </div>
          <div className='last-part'>
            <h2>Budget Based</h2>
            <h4>Get a computer system according to your budget</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
