import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../images/trvel.png";
import { AuthContext } from "../../Contexts/Context";

const Header = () => {
  const {user , singout}=useContext(AuthContext);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container text-white">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt=" " className="logo" />
            Travel Guru
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
             
              <li className="nav-item d-flex justify-content-start align-items-center lg-d-none">
                <Link className="nav-link text-dark">
                  {user?.displayName}
                </Link>
                <img src={user?.photoURL} className="rounded-circle avatar" alt="" />
                {
                  user?  <button className="btn btn-outline-dark ms-2" onClick={singout}>Logout</button> :  <Link className="nav-link text-dark" id="drej" to="/login">
                  Login
                </Link>
                }
               
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
