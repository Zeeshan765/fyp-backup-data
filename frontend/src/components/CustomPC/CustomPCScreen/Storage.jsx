import React from 'react';
import { useState } from 'react';
import HddComp from './HddComp';
import SsdComp from './SsdComp';
import apiService from '../../../services/ApiService';
import "./Storage.css"
function Storage(props) {
function handleChange(){
  
}

  console.log(props )
  const [products, setProducts] = useState([]);
  const [hdd,setHdd]= useState()
    React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
   
     return (
     <div className='parentStorage'>
         <h1 className='hddtitle'>Hard Disk</h1>
     <div  className='hdd'>
     <div className='hdddrops'>
      
        </div>
     {products
         .filter((product) => product.category === 'Hdd' )
         .map((product, index) => (
           <HddComp key={index} product={product} />
         ))} 
   
     </div>
     <h1 className='ssdTitle'>SSD</h1>
     <div className='ssd'>
     
      {products
         .filter((product) => product.category === 'Ssd' )
         .map((product, index) => (
           <SsdComp key={index} product={product} />
         ))} 
   
   </div>
     
     </div>);
   };

export default Storage;