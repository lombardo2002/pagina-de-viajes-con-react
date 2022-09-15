import { useEffect, useState } from "react";
import getList from "../utils/getViajes";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const [arrayList, setArrayList] = useState([]);


useEffect(() => {
    getList()
        .then((response) => setArrayList(response))
        .catch((err) => console.error(err))
        .finally()
}, [])


    return(
        <p>{props.greeting}</p>,
        <ItemList destinos={arrayList}/>
    );
}

export default ItemListContainer;