import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
    <div>
        <header>
        <nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Disfruta Viajando</a>
        <div>
            <CartWidget/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <Link to="/categoria/5" className="nav-item">
                <a className="nav-link" href="#">Destinos Para Invierno</a>
            </Link>
            <Link to="/categoria/2" className="nav-item">
                <a className="nav-link" href="#">Destinos Para Verano</a>
            </Link>
            <Link to="/categoria/8" className="nav-item">
                <a className="nav-link" href="#">Rebajas</a>
            </Link>
        </ul>
        <span className="navbar-text">

        </span>
    </div>
    </div>
</nav>
    </header>
    </div>
    );
}

export default Navbar;