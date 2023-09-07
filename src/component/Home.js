import React, { useEffect, useState } from 'react';
import { productService } from '../service/productService';
import { Link } from 'react-router-dom';

const Home = () => {

  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState("");


  const fetchDataFromSource = async () => {  
    try{
      const response = await productService.getAllProducts();
      const data = await response.data;
      setProductList(data);
      console.log(response.data);
        } catch(error)
          { console.log("Error in fetching product details!") };
      }

  useEffect(()=>{
      fetchDataFromSource();
  },[]);


  const deleteProductHandler = (id) =>{
    productService.deleteProduct(id).then(()=>{
      setMessage("Product deleted successfully");
      fetchDataFromSource();
    }).catch(()=> console.log("Error loading after delete."));
    
  }

  return(
    <div className="contsiner mt-5">
      <div className='card'>
        <div className={`card-header fs-3 text-center bg-dark`}><h2>Product details:</h2></div>
        <div className='card-body'>
        {message && <p className='fs-5 text-center text-success'>{message}</p>}
      <table className="table table-bordered">
  <thead className="table table-dark">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    { productList.length > 0 && productList.map( (item,num=1) =>
      {
        //console.log(item);
         return(
          <tr key={num}>
          <th scope="row">{++num}</th>
          <td>{item.productName}</td>
          <td>{item.productDesciption}</td>
          <td>{item.productPrice}</td>
          <td>{item.productStatus}</td>
          <td>
            <Link to={"/editProduct/"+item.id} className='btn btn-sm btn-success ms-2'>Edit</Link>
            <button onClick={() => deleteProductHandler(item.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
          </td>
        </tr>
      )
      }
    )}
  </tbody>
</table>
</div>
      </div>
      
    </div>
  )
};

export default Home;