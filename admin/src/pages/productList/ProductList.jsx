/*import React from 'react';
import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};
export default ProductList;

//Data
[
    {
      productid: 1,
      productname: 'ryzen',
      price: 20000,
    },
    {
      productid: 2,
      productname: 'Mutter Keema',
      price: 1000,
    },

    {
      productid: 3,
      productname: 'nvidia',
      price: 600000,
    },

    {
      productid: 4,
      productname: 'cooliing',
      price: 80000,
    },]
*/

import React, { useState } from 'react';
import apiService from '../../services/ApiService';
import { toast } from 'react-toastify';
import './productList.css';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    apiService.getProducts().then((res) => {
      setProducts(res.data);
    });
  };
  React.useEffect(getData, []);

  const handleadd = () => {
    window.location.href = '/newproduct';
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
      <div className='productList'>
        <button className='btn-add' onClick={handleadd}>
          Create
        </button>
        <table className='data-table'>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={index}>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <button
                    className='edit-btn'
                    onClick={(e) => {
                      console.log('navigate to update');
                      props.history.push('/product/' + p._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='del-btn'
                    onClick={(e) => {
                      apiService
                        .deleteProduct('/api/products/' + p._id)
                        .then((data) => {
                          toast.success('Product Deleted Successfully');
                          console.log(p._id);

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

export default ProductList;
