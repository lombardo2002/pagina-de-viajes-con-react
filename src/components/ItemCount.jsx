import { useState } from "react"
import "../App.css"

const ItemCount=({ stock, initial, onAdd}) =>{

    const[pasajes, setPasajes] = useState(initial);

    const suma=()=>{
        if(pasajes<stock){
            setPasajes(pasajes+1);
        }
    }

    const resta=()=>{
        if (pasajes > initial){
            setPasajes(pasajes-1);
        }
    }

    const elejirPaquete = () =>{
        setPasajes(stock)
    }


    return(
        <>

        <button className="botones-css" onClick={() => suma()}>+</button>
        <span>{pasajes}</span>
        <button className="botones-css" onClick={() => resta()}>-</button>
        {
                stock
                ? <button className="botones-css"  onClick={() => onAdd(pasajes)}>Agregar Al Carrito</button>
                : <button className="botones-css" onClick={elejirPaquete}>Elejir Paquete</button>
        }
        </>
    )
}

export default ItemCount;
