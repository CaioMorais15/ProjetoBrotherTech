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
          <img
            className="mt-4"
            src={logo}
            alt="Logo"
            width="85"
            height="85"
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
              <Link className="nav-link active" to="/" style={{ color:'black',}}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/SobreNos" style={{ color:'black',}} >
                Sobre nós
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CompreCripto" style={{ color:'black',}}>
                Compre Cripto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mercados" style={{color:'black',}} >
              
                Mercados
              </Link>
              <Link className="nav-link" to="/Converter">
              Converter
              </Link>
            </li>
          </ul>
          <div>
            <div style={{margin: "right"}} className="dropdown">
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
              placeholder="Pesquisar"
              aria-label="Search"
            />
              <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="2em"  viewBox="0 0 2048 2048"><path fill="currentColor" d="M1344 0q97 0 187 25t168 71t142 110t111 143t71 168t25 187q0 97-25 187t-71 168t-110 142t-143 111t-168 71t-187 25q-125 0-239-42t-211-121l-785 784q-19 19-45 19t-45-19t-19-45t19-45l784-785q-79-96-121-210t-42-240q0-97 25-187t71-168t110-142T989 96t168-71t187-25m0 1280q119 0 224-45t183-124t123-183t46-224q0-119-45-224t-124-183t-183-123t-224-46q-119 0-224 45T937 297T814 480t-46 224q0 119 45 224t124 183t183 123t224 46"/>
              </svg>
            {/* <button className="btn bg-red" type="submit">
              Search
            </button> */}
          </form>
          <Link style={{ color: 'black', width:"6em", padding:'2em' }} to={"../Login"} >Entrar</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
