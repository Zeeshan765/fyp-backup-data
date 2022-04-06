import React from 'react'
import apiService from '../../services/ApiService'
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function ChangePassword(props) {
    function updatePass(){
        apiService.put('/api/user/update/password',{oldpassword,newPassword}).then((res) => {
            console.log(res);
            toast.success('Password Updated Successfully');
            props.history.push('/profile');
        });
    }
 const [oldpassword, setOldpassword] = useState("")
 const [newPassword, setNewPassword] = useState("")
  return (
      <div className='container'>
          <div>
          <input onChange={(e)=>{setOldpassword(e.target.value)}} className='pass' type="text" placeholder='Old Password' />
          </div>
          <div>
          <input     onChange={(e)=>{setNewPassword(e.target.value)}}  className='pass' type="text" placeholder='New Password' />
          </div>
    <button onClick={updatePass} >Update</button>
    </div> 
  )
}
