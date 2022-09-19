import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import customFetch from "../utils/customFetch"
import ItemList from "./ItemList";
const { dataFrom } = require("../utils/getViajes.js")


const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);
    const { id } = useParams();


useEffect(() => {
    if (id){
        customFetch(2000, dataFrom.filter(item => item.categoriaId == id))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, dataFrom)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [id]);

    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} de pasajes al carrito`)
    }

    return (
        <>  
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;