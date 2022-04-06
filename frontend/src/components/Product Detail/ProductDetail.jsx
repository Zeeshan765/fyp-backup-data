import React, { useState } from 'react';
import apiService from '../../services/ApiService';
import { toast } from 'react-toastify';
import './productDetail.css';

const ProductDetail = (props) => {
  const [quantity, setQuantity] = useState(1);
  const product = props.match.params.id;
  //console.log(product);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [info1, setinfo1] = useState()
  const [info2, setinfo2] = useState()
  const [info3, setinfo3] = useState()
  const [info4, setinfo4] = useState()
  //console.log({ name, price, description, image });

  React.useEffect(() => {
    apiService.get('/api/products/find/' + product).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setPrice(res.data.price);
      setDescription(res.data.description);
      setImage(res.data.picture);
      setinfo1(res.data.info1)
      setinfo2(res.data.info2)
      setinfo3(res.data.info3)
      setinfo4(res.data.info4)
    });
  }, []);
  let incrementCount = () => {
    setQuantity(quantity + 1);
  };

  let decrementCount = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  //Handle Add To Cart Logic
  const handleaddtocart = (e) => {
    e.preventDefault();
    apiService
      .post('/api/data/carts', { product, quantity })
      .then((res) => {
        console.log(res.data);
        toast.success('Added To Cart Successfully');
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };

  return (
    <>
      <div className='content'>
        <div className='main-detail'>
          <img

            src={image}
            className='detail-image'
            alt='React Bootstrap logo'
          />
        </div>
        <div className='prodata'>
          <p className='titleText'>Product: {name}</p>
          <hr></hr>
          <br />
          <p className='info1'>➤ {info1}</p>
          
          <br />
          <p className='info2'>➤ {info2}</p>
         
          <br />
          <p className='info1'>➤ {info3}</p>
         
          <br />
          <p className='info1'>➤ {info4}</p>
        
          <br />  
          
          <p className='additioninfo'>Addition information </p>
          <h4 className='desc'>{description}</h4>
          <br />
          <hr></hr>

          <p className='priceText'>Price: {price}</p>
          <br />
    

          <div className='buttonss'>
            <button
              style={{ height: '30px', width: '100px' }}
              className='btnDec'
              variant='primary'
              onClick={decrementCount}
            >
              -
            </button>
            <p className='countText'>{quantity}</p>
            <button
              className='btnInc'
              variant='primary'
              onClick={incrementCount}
            >
              +
            </button>
          </div>
          <br />
          <button className='cartBtn' onClick={handleaddtocart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
