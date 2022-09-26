import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch"
const { dataFrom } = require("../utils/getViajes")


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();
    useEffect(() => {
        customFetch(100, dataFrom.find(item => item.id === parseInt(idItem))) 
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return(
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;