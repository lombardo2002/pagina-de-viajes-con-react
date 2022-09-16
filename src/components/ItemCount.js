import { useState } from "react"
import "../App.css"

const ItemCount=({destino}) =>{

    const[pasajes, setPasajeros] = useState(0);

    const suma=()=>{
        if(pasajes<5){
            setPasajeros(pasajes+1)}
    }

    const resta=()=>{
        if (pasajes >=1){
            setPasajeros(pasajes-1)}
    }

    const agregar = () => {
        setPasajeros (pasajes);
        
        if(pasajes !==0){
            alert(`Cantidad de personas que viajan:${pasajes}`)
            setPasajeros(1);
        }
    }

    return(
        <>
        <h3>{destino}</h3>

        <button onClick={suma}>+</button>
        <span>{pasajes}</span>
        <button onClick={resta}>-</button>
        <button onClick={agregar}>Elejir paquete.</button>
        </>
    )
}

export default ItemCount;