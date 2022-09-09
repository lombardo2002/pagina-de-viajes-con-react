import React from "react";
import CartWidget from "./CartWidget";
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
            <li className="nav-item">
                <a className="nav-link" href="#">Destinos Para Invierno</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Destinos Para Verano</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Rebajas</a>
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