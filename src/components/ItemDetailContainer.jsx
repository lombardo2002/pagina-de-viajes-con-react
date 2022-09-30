import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();
    useEffect(() => {
        const docRef = doc (db, "destinations", idItem);
        getDoc(docRef)
        .then(result => setData({
            id: result.id,
            ...result.data()
        }))
    }, [idItem]);

    return(
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;
