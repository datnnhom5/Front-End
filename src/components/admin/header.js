import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
            </NavLink>
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <NavLink to="/"   className="nav-link text-secondary">
                  <svg className="bi d-block mx-auto mb-1" width={24} height={24}><use xlinkHref="#home" /></svg>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width={24} height={24}><use xlinkHref="#speedometer2" /></svg>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/products" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width={24} height={24}><use xlinkHref="#grid" /></svg>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/category" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width={24} height={24}><use xlinkHref="#people-circle" /></svg>
                  Category
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

  );
}
