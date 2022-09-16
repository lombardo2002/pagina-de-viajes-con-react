import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { dataFrom } = require ("../utils/getViajes");


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [cargando, setCargando] = useState(false)
    useEffect(() => {
        customFetch(8000, dataFrom[9]) 
            .then(result => setData(result))
            .catch(err => console.log(err))
            .finally(() => setCargando(false))
    }, []);

    return(
        <>
        {cargando ? <cargando/> : <ItemDetail data={data}/>}
        </>
    );
}

export default ItemDetailContainer;