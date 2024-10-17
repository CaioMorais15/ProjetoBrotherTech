import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logotech.png";
import vector from "../../assets/vector.png";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-0 m-0 navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid pt-1">
        <Link className="navbar-brand" to="/">
          <img className="mt-4" src={logo} alt="Logo" width="120" height="120" />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/SobreNos">
                Sobre nós
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CompreCripto">
                Compre Cripto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mercados">
                Mercados
              </Link>
              <Link className="nav-link" to="/Converter">
              Converter
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="button nav-link me-2" type="submit">
                Search
              </button>
            </form>
            <Link to={"../Login"}  className="button nav-link">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
