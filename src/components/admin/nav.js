import { NavLink } from "react-router-dom";

export default function Nav(props, countProduct = 0, countCate = 0) {
  countProduct = props.data.map((item, index) => (
    <td>{index + 1}</td>
  ).length);

  countCate = props.categoryData.map((item, index) => (
    <td>{index + 1}</td>
  ).length);
  return (
    <nav
      id="sidebarMenu"
    // className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <ul className="list-group">
        <NavLink className="nav-link " to="/admin/">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dashboard
          </li>
        </NavLink>
        <NavLink className="nav-link " to="/admin/products">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Products
            <span className="badge bg-primary rounded-pill">{JSON.stringify(countProduct.length)}</span>
          </li>
        </NavLink>
        <NavLink className="nav-link " to="/admin/category">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Category
            <span className="badge bg-primary rounded-pill">{JSON.stringify(countCate.length)}</span>
          </li>
        </NavLink>
      </ul>

    </nav >
  );
}
