import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
    <div>
        <header>
        <nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand">Disfruta Viajando</Link>
        <div>
            <Link to="/cart" className="icono-carrito"><CartWidget/></Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/5" className="nav-link">Destinos Para Invierno</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/2" className="nav-link">Destinos Para Verano</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/8" className="nav-link">Rebajas</Link>
            </li>
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