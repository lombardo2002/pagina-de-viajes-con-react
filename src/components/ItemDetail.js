import { useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({data}) => {
    const [pasajes, setPasajeros] = useState(0);

    const agregar = () =>{
        if (pasajes <=20){

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
        <div className="Imagen-container2">
            <div>
            <h1 className="destino-css">{data.destino}</h1>
            <p className="lugar-css">{data.lugar}</p>
            <img className="imagen-css" src={data.imagen}/>
            <p className="hospedaje">Hospedaje en Hotel:{data.hotel}</p>
            <p className="hospedaje">Excursion:{data.excursiones}</p>
            <ItemCount
            data={data}
            sumar={sumar}
            restar={restar}
            pasajes={pasajes}
            agregar={agregar}
            />
            </div>
            <div className="precio-css">
                <h3>${data.precio}</h3>
            </div>
        </div>
    );
}



export default ItemDetail;