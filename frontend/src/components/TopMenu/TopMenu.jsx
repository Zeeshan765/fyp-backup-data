import React from 'react';
import { Link } from 'react-router-dom';
import Account from '../../Assets/account.png';
import Cart from '../../Assets/cart.png';
import apiService from '../../services/ApiService';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './TopMenu.css';
const handleProfile=()=>{
  window.location.href = '/profile';
 
  
  
}
const TopMenu = () => {
  //Logout
  const handlelogout = (e) => {
    // localStorage.setItem('token', '');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className='menu-container'>
      <div className='left-part'>
        <h3>Logo</h3>
      </div>
      <div className='middle-part'>
        <ul>
          <li>
            <Link to='/' className='link-color'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/components' className='link-color'>
              Components
            </Link>
          </li>
          <li>
            <Link to='/peripherals' className='link-color'>
              Peripherals
            </Link>
          </li>
          <li>
            <Link to='/about-us' className='link-color'>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className='right-part'>
        {!apiService.isLoggedIn() ? (
          <Link to='/login'>
            <img src={Account} alt='' />
          </Link>
        ) : (
          
         // <img onClick={handleProfile} src={Account} alt='' />
          <Popup className='popUp' trigger={ <img className='accImg' src={Account}/>} position="bottom center">
          <h4  className='editProfile'onClick={handleProfile} >View Profile</h4>
          <h4 className='editProfile' onClick={handlelogout}>Logout</h4>
        </Popup>
      
          //<button onClick={handlelogout}>Logout</button>
        )}
        <Link to='/shop-cart'>
          <img src={Cart} alt='' />
        </Link>
      </div>
    </div>
  );
};

export default TopMenu;
