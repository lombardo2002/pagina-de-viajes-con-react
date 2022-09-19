import React from "react";
import { Link } from "react-router-dom"; 

const Item = ({id, lugar, precio, hotel, excursiones, img, destino}) => {
    return (
        <>
        <div className="cardsViajes">
            <img src={img} alt=""/>
            <div>
                <h3>{destino}</h3>
                <p>lugar:{lugar}</p>
                <p>Hotel:{hotel}</p>
                <p>Excursión:{excursiones}</p>
                <p>Precio ${precio}</p>
                <button className="button">Ver mas detalles</button>
                <Link to={`/item/${id}`}>Details</Link>
            </div>
        </div>
        </>
    );
}


export default Item;