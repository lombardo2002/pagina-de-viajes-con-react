import { useEffect, useState } from "react";
import getList from "../utils/getViajes";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);


useEffect(() => {
    setLoading(true);
    getList()
        .then((response) => setArrayList(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
}, [])


    return(
        <>
        <p>{props.greeting}</p>,
        {loading ? <h1>Cargando...</h1> :<ItemList destinos={arrayList}/>}
        </>
    );
}

export default ItemListContainer;