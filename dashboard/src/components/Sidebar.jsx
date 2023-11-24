import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
export default function Sidebar() {
  return (
    <div className="vertical-nav bg-white" id="sidebar">
      <div className="py-4 px-3 mb-4 bg-light">
        <div className="media d-flex align-items-center">
          <img
            src={logo}
            alt="..."
            width="65"
            className="mr-3 rounded-circle img-thumbnail shadow-sm"
          />
          <div className="media-body">
            <h4 className="m-0">Vission</h4>
            <p className="font-weight-light text-muted mb-0"></p>
          </div>
        </div>
      </div>

      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Menu
      </p>

      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-dark font-italic bg-light">
            <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link text-dark font-italic">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Sobre Nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/users"} className="nav-link text-dark font-italic">
            <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
            Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/products"} className="nav-link text-dark font-italic">
            <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
            Productos
          </Link>
        </li>
      </ul>

      <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        ...
      </p>

      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <Link to={"/orders"} className="nav-link text-dark font-italic">
            <i className="fa fa-area-chart mr-3 text-primary fa-fw"></i>
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/categories"} className="nav-link text-dark font-italic">
            <i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
            ...
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark font-italic">
            <i className="fa fa-line-chart mr-3 text-primary fa-fw"></i>
            ...
          </a>
        </li>
      </ul>
    </div>
  );
}
