import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import getList from "../utils/getViajes"
//const { dataFrom } = require ("../utils/getViajes");
console.log(getList())

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [cargando, setCargando] = useState(false)
    useEffect(() => {
        getList() 
            .then(result => setData(result[8]))
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