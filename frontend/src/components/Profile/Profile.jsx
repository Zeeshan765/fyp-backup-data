import React, { useState } from 'react';
import apiService from '../../services/ApiService';
import { toast } from 'react-toastify';
import './Profile.css';
import { useEffect } from 'react';
import reactRouterDom from 'react-router-dom';

const Profile = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

 useEffect(() => {
    apiService.get('/api/user/find').then((res) => {
    
  
    setName(res.data.name)
    setEmail(res.data.email)
    setPhone(res.data.phone)
  
   });}, []);
 
  console.log({ name, email, phone });

  //Handle Create Function
  const handlecreate = (e) => {
    e.preventDefault();
    let formData = new FormData();
    apiService
      .post('/api/products', formData)
      .then((data) => {
        toast.success('Product Add successfully');
        console.log(data);
        props.history.push('/products');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
function handlepassword(){
  props.history.push('/update/password');
}
  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>My Profile</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>User Name</label>
          <input
            type='text'
            value={name}
            placeholder='Enter Name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='addProductItem'>
          <label>Email</label>
          <input
          value={email}
            type='text'
            placeholder='Enter Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>


        <div className='addProductItem'>
          <label>Phone No.</label>
          
          <input
          value={phone}
            type='text'
            placeholder='Enter Phone No.'
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
         
        </div>
        <div className='changePassword'>
          <h3 onClick={handlepassword} >Change Password </h3>
        </div>

       
   
      </form>
    </div>
  );
};

export default Profile;
