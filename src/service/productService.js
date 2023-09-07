import axios from "axios";

const API_URL = 'http://localhost:9090'
class ProductService {

  saveProduct(product){
    return axios.post(API_URL + "/saveProduct", product);
  }

  getAllProducts(product){
    return axios.get(API_URL + "/");
  }

  getProductById(id){
    return axios.get(API_URL + "/products/" + id);
  }

  deleteProduct(id){
    return axios.get(API_URL + "/deleteProduct/" + id);
  }

  updateProduct(product){
    return axios.put(API_URL + "/product/" + product.id, product);
  }

};

export const productService = new ProductService();