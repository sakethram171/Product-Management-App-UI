import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Product Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to='/' className={({isActive})=>isActive ? "nav-link active" :"nav-link"} aria-current="page" href="/#">Show Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/addProduct' className={({isActive})=>isActive ? "nav-link active" :"nav-link"} href="/#">Add Product</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
};

export default Navbar;