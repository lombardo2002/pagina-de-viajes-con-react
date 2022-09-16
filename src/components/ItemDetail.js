import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({data}) => {
    const [pasajes, setPasajeros] = useState(0);
    const agregar = () =>{
        if (pasajes <=5){

        }else setPasajeros(pasajes-1);
    }
    const restar = () => {
        if (pasajes <=0){

        }else setPasajeros(pasajes-1)
    }
    const sumar = () => {
        if(pasajes < data.stock)
        setPasajeros(pasajes+1);
    }

    return (
        <div className="Imagen-container">
            <div>
            <h1>{data.destino}</h1>
            <img src={data.imagen}/>
            <ItemCount
            data={data}
            sumar={sumar}
            restar={restar}
            pasajes={pasajes}
            agregar={agregar}
            />
            </div>
            <div>
                <h3>${data.precio}</h3>
                <p>Quedan {data.stock}{data.pasajes} disponibles.</p>
            </div>
        </div>
    );
}



export default ItemDetail;