import ItemCount from "./ItemCount";
import customFetch from "../utils/customFetch"
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { dataFrom } = require("../utils/getViajes.js")


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

useEffect(() => {
        customFetch(2000, dataFrom.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

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