import { useEffect, useState } from "react";

const Imagen = ({id, destino, hotel, excursiones, boton, precio, lugar, imagen}) => {
    const [pasajeros, setPasajeros] = useState(0);

    useEffect(() => {
        
    }, [pasajeros]);

    const botonpj = () => {
        setPasajeros(pasajeros+1);
    }

    return (
        <div className="Imagen-container">
            <div className="Imagen">
                <img src={imagen} alt="Same alt value"/>
            </div>
            <div className="Imagen-info">
                <h3>{destino}</h3>
                <h4>{lugar}</h4>
                <p>Hotel:{hotel}</p>
                <p>Excursiones:{excursiones}</p>
                <p>{precio}</p>
                <button onClick={botonpj}>Cantidad de pasajeros</button> {pasajeros}
                <button onClick={() => boton(id)}>Elejir Paquete</button>
            </div>
        </div>
    );
}

export default Imagen;