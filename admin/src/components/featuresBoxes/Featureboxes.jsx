import React from 'react';
import './featureboxes.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const Featureboxes = () => {
  return (
    <>
      <div className='featured'>
        <div className='featuredItem_1'>
          <span className='featuredTitle'>Revanue</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,415</span>
            <span className='featuredMoneyRate'>
              -11.4 <ArrowDownward className='featuredIcon negative' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem_2'>
          <span className='featuredTitle'>Sales</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$4,415</span>
            <span className='featuredMoneyRate'>
              -1.4 <ArrowDownward className='featuredIcon negative' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem_3'>
          <span className='featuredTitle'>Cost</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,225</span>
            <span className='featuredMoneyRate'>
              +2.4 <ArrowUpward className='featuredIcon' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
      </div>
    </>
  );
};

export default Featureboxes;
