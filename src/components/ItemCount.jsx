import { useEffect, useState } from "react"
import "../App.css"

const ItemCount=({ stock, initial, onAdd}) =>{

    const[pasajes, setPasajes] = useState(initial);

    useEffect(() => {
        setPasajes(initial);
    },[]);

    const suma=()=>{
        if(pasajes<stock){
            setPasajes(pasajes+1);
            console.log("sumaste una persona mas a tu viaje")
        }
    }

    const resta=()=>{
        if (pasajes > initial){
            setPasajes(pasajes-1);
            console.log("sacaste cosas del carrito")
        }
    }

    const elejirPaquete = () =>{
        setPasajes(stock)
        console.log("Me agregue al carrito")
    }


    return(
        <>

        <button className="botones-css" onClick={() => suma()}>+</button>
        <span>{pasajes}</span>
        <button className="botones-css" onClick={() => resta()}>-</button>
        {
                stock
                ? <button className="botones-css"  onClick={() => onAdd(pasajes)}>Add to Cart</button>
                : <button className="botones-css" onClick={elejirPaquete}>Elejir Paquete</button>
        }
        </>
    )
}

export default ItemCount;