import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logotech.png";
import vector from "../../assets/vector.png"
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-0 m-0 navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mt-1">
        <Link className="navbar-brand" to="/">
          <img
            className="mt-4"
            src={logo}
            alt="Logo"
            width="120"
            height="120"
          />
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
            </li>
          </ul>
          <div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle m-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             <img src={vector}
              height="24px"
             
             ></img>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">BTC </a></li>
                <li><a className="dropdown-item" href="#">JASMIN</a></li>
                <li><a className="dropdown-item" href="#">ETHERUM</a></li>
              </ul>
            </div>
          </div>
          <form className="d-flex mt-03" role="search" background="000000">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn bg-red" type="submit">
              Search
            </button>
          </form>
          <Link to={"../Login"} >Entrar</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;