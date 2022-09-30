import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDoc(doc(db, "destinations", id));
            return {id: id, ...querySnapshot()}
        }
        firestoreFetch()
        .then(result => setData(result.find(item => item.id == id)))
        .catch(err => console.log(err))
    }, [id]);

    return(
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;
