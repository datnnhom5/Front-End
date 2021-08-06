import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <header className="p-3 bg-dark text-white">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 text-white">Trang chủ</Link></li>
        <li><Link to="/about" className="nav-link px-2 text-white">Giới thiệu</Link></li>
        <li><Link to="/Product" className="nav-link px-2 text-white">Sản phẩm</Link></li>
        <li><Link to="/contact" className="nav-link px-2 text-white">Liên hệ</Link></li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
      </form>
      <div className="text-end">
        <Link Link to="/admin"  type="button" className="btn btn-outline-light me-2">Login</Link>
        <Link Link to="/admin" type="button" className="btn btn-warning">Sign-up</Link>
      </div>
    </div>
  </div>
</header>


    )
}

export default Header
