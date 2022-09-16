import { useState } from "react";
import Imagen from "../components/imagen";


const Imagenes = () => {
    const [getList] = useState([])


    return(
        <>
        {
            getList.map(data => (
                <Imagen
                key={data.id}
                id={data.id}
                imagen={data.imagen}
                destino={data.destino}
                lugar={data.lugar}
                hotel={data.hotel}
                excursiones={data.excursiones}
                precio={data.precio}
                boton={data.boton}
                />
            ))
        }
        </>
    );
}

export default Imagenes;