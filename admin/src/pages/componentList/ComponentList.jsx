import React, { useState } from 'react';
import apiService from '../../services/ApiService';
import { toast } from 'react-toastify';
import './componentList.css';

const ComponentList = (props) => {
  const [components, setComponents] = useState([]);
  const getData = () => {
    apiService.getComponents().then((res) => {
      setComponents(res.data);
    });
  };
  React.useEffect(getData, []);

  const handleadd = () => {
    window.location.href = '/newcomponent';
  };

  //const id = props.match.params._id;

  //Delete the Product
  //const handledelete = () => {
  //console.log(props.match.params._id);
  // apiService
  //   .deleteProduct('/api/products/' + id)
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };

  return (
    <>
      <div className='componentList'>
        <button className='btn-add' onClick={handleadd}>
          Create
        </button>
        <table className='data-table'>
          <thead>
            <tr>
              <th>Component Id</th>
              <th>Component Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {components.map((c, index) => (
              <tr key={index}>
                <td>{c._id}</td>
                <td>{c.name}</td>
                <td>{c.price}</td>
                <td>
                  <button
                    className='edit-btn'
                    onClick={(e) => {
                      console.log('navigate to update');
                      props.history.push('/component/' + c._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='del-btn'
                    onClick={(e) => {
                      apiService
                        .deleteComponent('/api/components/' + c._id)
                        .then((data) => {
                          console.log(c._id);
                          toast.success('Component Deleted Successfully');
                          console.log(data);
                          console.log(getData());
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComponentList;
