import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import getList from "../utils/getViajes"
import ItemListContainer from "./ItemListContainer";


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
        <ItemListContainer/>
        {cargando ? <cargando/> : <ItemDetail data={data}/>}
        </>
    );
}

export default ItemDetailContainer;