import { useState } from "react";
import Imagen from "../components/imagen";
import { getList } from "../utils/getViajes";


const Imagenes = () => {
    const [getList] = useState([])


    return(
        <>
        {
            getList.map(item => (
                <Imagen
                key={item.id}
                id={item.id}
                imagen={item.imagen}
                destino={item.destino}
                lugar={item.lugar}
                hotel={item.hotel}
                excursiones={item.excursiones}
                precio={item.precio}
                boton={item.boton}
                pasajes={item.pasajes}
                />
            ))
        }
        </>
    );
}

export default Imagenes;