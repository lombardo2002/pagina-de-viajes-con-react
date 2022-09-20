import customFetch from "../utils/customFetch"
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  dataFrom  from "../utils/getViajes.js"


const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const { idCategory } = useParams();

useEffect(() => {
    if(idCategory) {
        customFetch(2000, dataFrom.filter(item => item.categoryId == idCategory))
        .then(result => setItem(result))
        .catch(err => console.log(err))
    } else {
        customFetch(2000, dataFrom)
        .then(result => setItem(result))
        .catch(err => console.log(err))
    }
    }, [idCategory]);

    return (
        <>  
            <ItemList items={item} />
        </>
    );
}

export default ItemListContainer;