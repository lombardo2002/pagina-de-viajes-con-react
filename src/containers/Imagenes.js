import { useEffect, useState } from "react";
import Imagen from "../components/imagen";
import getList from "../utils/getViajes";
import customFetch from "../utils/customFetch"

const Imagenes = () => {
    const [getList, setData] = useState([])

    useEffect(() => {
        customFetch(2000, getList)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);

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
                />
            ))
        }
        </>
    );
}

export default Imagenes;