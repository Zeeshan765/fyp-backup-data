import React from 'react';
import './topbar.css';
//import { Settings } from '@material-ui/icons';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const Topbar = () => {
  return (
    <>
      <div className='topbar'>
        <div className='topbarWrapper'>
          <div className='topLeft'>
            <span className='logo'>Multiverse Of Computers</span>
          </div>
          <div className='topRight'>
            <div className='topbarIconContainer'>
              <LockOpenIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
