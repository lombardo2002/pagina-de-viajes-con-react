import { useEffect, useState } from "react"
import "../App.css"

const ItemCount=({ stock = 5, initial = 1, onAdd}) =>{

    const[pasajes, setPasajeros] = useState(initial);

    useEffect(() => {
        setPasajeros(initial);
    },[]);

    const suma=()=>{
        if(pasajes<stock){
            setPasajeros(pasajes+1);
            console.log("sumaste una persona mas a tu viaje")
        }
    }

    const resta=()=>{
        if (pasajes > initial){
            setPasajeros(pasajes-1);
            console.log("sacaste cosas del carrito")
        }
    }

    const elejirPaquete = () =>{
        setPasajeros(stock)
        console.log("Me agregue al carrito")
    }




    return(
        <>

        <button className="botones-css" onClick={() => suma()}>+</button>
        <span>{pasajes}</span>
        <button className="botones-css" onClick={() => resta}>-</button>
        {
                stock
                ? <button className="botones-css"  onClick={() => onAdd(pasajes)}>Add to Cart</button>
                : <button className="botones-css" onClick={elejirPaquete}>Elejir Paquete</button>
        }
        </>
    )
}

export default ItemCount;