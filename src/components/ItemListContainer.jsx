import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"


const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const { idCategory } = useParams();

useEffect(() => {
        const firestoreFetch = async() => {
            const querySnapshot = await getDocs(collection(db, "destinations"));
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