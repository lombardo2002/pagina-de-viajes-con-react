import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch"
const { dataFrom } = require("../utils/getViajes")


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idData } = useParams();
    useEffect(() => {
        customFetch(2000, dataFrom.find(data => data.id === parseInt(idData))) 
            .then(result => setData(result[10]))
            .catch(err => console.log(err))
    }, []);

    return(
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;