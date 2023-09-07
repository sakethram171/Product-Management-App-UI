import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import RootLayout from './component/Root';
import EditProduct from './component/EditProduct';


const router = createBrowserRouter([
  {
    path:'/', 
    element:<RootLayout/>,
    children:[
    { path: '', element: <Home/>, index:true},
    { path: '/addProduct', element: <AddProduct/>},
    { path: '/editProduct/:id', element: <EditProduct/>},
]},

]);

function App() {
  return (
    <RouterProvider router ={router}>
    <Navbar/>
    </RouterProvider>

  );
}

export default App;
