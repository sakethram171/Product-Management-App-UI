import React, { useState } from 'react';
import {productService} from '../service/productService';
import './AddProduct.module.css';
import { Link } from 'react-router-dom';

const AddProduct = () => {

  const [product, setProduct] = useState({
    productName:"",
    productDesciption:"",
    productPrice:"",
    productStatus:"",
  });

  const [message, setMessage] = useState("");

  const changeHandler = (event)=>{
    const value = event.target.value;
    setProduct({...product,[event.target.name]:value});
  };
  const formSubmitHandler = (event)=>{
    event.preventDefault();
    productService.saveProduct(product).then(data => {console.log("product added successfully");
    setMessage("Product added successfully!");
    setProduct({
      productName:"",
      productDesciption:"",
      productPrice:"",
      productStatus:"",
    });
  }).catch(error => console.log(error));
  };


  return(
    <div className='container mt-3'>
      <div className='card'>
        <div className="col-md-7 offset-md-3 mt-3">
          <div className="card-header fs-3"><h1>Enter product details:</h1></div>
        <div className='card-body'>
          {message && <p className='fs-5 text-center text-success'>{message}</p>}
      <form onSubmit={formSubmitHandler}>
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
      <button type="submit" className="btn btn-primary col-md-12 mt-3">Submit</button>
      <Link to='/' className="btn btn-primary col-md-12 mt-3">Back</Link>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
};

export default AddProduct;