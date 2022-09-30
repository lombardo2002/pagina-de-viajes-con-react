import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"


const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const { idCategory } = useParams();

useEffect(() => {

    async function firestoreFetch(){
        let q
        if (idCategory) {
            q = query(collection(db, "destinations"), where(`categoryId`, `==`, parseInt(idCategory)))
        } else {
            q = query(collection(db, "destinations"))
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }))
        return dataFromFirestore
    }


        firestoreFetch()
        .then(result => setItem(result))
    }, [idCategory]);


    return (
        <>  
            <ItemList items={item} />
        </>
    );
}

export default ItemListContainer;