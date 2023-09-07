import React, { useEffect } from 'react';
import { useState } from 'react';
import {productService} from '../service/productService';
import { useNavigate, useParams } from 'react-router-dom';
import './EditProduct.module.css';
import { Link } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    id:"",
    productName:"",
    productDesciption:"",
    productPrice:"",
    productStatus:"",
  });

  const {id:prodId} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    productService.getProductById(prodId).then((response)=>{
      setProduct(response.data);
    }).catch((error)=>console.log("Error in fetching data of product being edited",error));
  },[prodId]);

  const changeHandler = (event)=>{
    const value = event.target.value;
    setProduct({...product,[event.target.name]:value});
  };

  const editproductHandler = (event)=>{
    event.preventDefault();
    productService.updateProduct(product).then(
      navigate("/")
    ).catch(error => console.log(error));
  };


  return(
    <div className='container mt-3'>
      <div className='card'>
        <div className="col-md-7 offset-md-3 mt-3">
        <div className="card-header fs-3"><h1>Modify product details:</h1></div>
        <div className='card-body'>
      <form onSubmit={editproductHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Product Name:</label>
        <input value={product.productName} name="productName" type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" onChange={changeHandler}/>
      </div>
      <div className="form-group">
      <label htmlFor="desc">Description:</label>
        <input value={product.productDesciption} name="productDesciption" type="text" className="form-control" id="desc" placeholder="Enter product description" onChange={changeHandler}/>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input value={product.productPrice} name="productPrice" type="text" className="form-control" id="price" placeholder="Enter price" onChange={changeHandler}/>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <input value={product.productStatus} name="productStatus" type="text" className="form-control" id="status" placeholder="Enter status" onChange={changeHandler}/>
      </div>
      <div>
      <button type="submit" className="btn btn-primary col-md-12 mt-3">Modify</button>
      <Link to='/' className="btn btn-primary col-md-12 mt-3">Discard</Link>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
};

export default EditProduct;