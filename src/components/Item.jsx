import React from "react";
import { Link } from "react-router-dom"; 

const Item = ({item}) => {
    return (
        <>
        <div className="cardsViajes">
            <img className="imagen-css" src={item.imagen} alt=""/>
            <div>
                <h3>{item.destino}</h3>
                <p className="letras">Lugar:{item.lugar}</p>
                <p className="letras">Estadía:{item.estadia}</p>
                <p className="letras">Precio ${item.precio}</p>
                <Link to={`/item/${item.id}`} className="botones-css">Detalles</Link>
            </div>
        </div>
        </>
    );
}


export default Item;