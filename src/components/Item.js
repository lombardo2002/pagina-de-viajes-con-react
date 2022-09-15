import React from "react";

const Item = ({destino}) => {
    return (
        <>
        <div className="cardsViajes">
            <img src={destino.img} alt=""/>
            <div>
                <h3>{destino.destino}</h3>
                <p>lugar:{destino.lugar}</p>
                <p>Hotel:{destino.hotel}</p>
                <p>Precio ${destino.precio}</p>
                <button className="button">Ver mas detalles</button>
            </div>
        </div>
        </>
    );
}


export default Item;