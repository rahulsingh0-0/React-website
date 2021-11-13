import { NavLink } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap2 from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              className="navbar-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/Services">
                  Servies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link " to="/About">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
