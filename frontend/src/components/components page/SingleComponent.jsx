import React from 'react';
import './singleComponent.css';
import { useHistory } from 'react-router';

const SingleComponent = (props) => {
  console.log(props);
  const { data } = props;
  const id = data._id;
  const history = useHistory();

  //View Detail Click Function
  const handleView = () => {
    console.log(id);
    // window.location.href = '/productdetail/' + id;
    //history.push('/productdetail');
    history.push('/componentdetail/' + id);
  };
  return (
    <>
      <div className='product-box1'>
        <div className='upper-box1'>
          <img src={data.picture} alt='' />
        </div>
        <div className='lower-box1'>
          <h3>{data.name}</h3>
          <h4>{data.price}</h4>
          <p>{data.description}</p>
          <button className='btn-check' onClick={handleView}>
            View Detail
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleComponent;
