import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";


const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} de pasajes al carrito`);
        setItemCount(cantidad);
    }


    return (
        <div>
            <div className="cardDestino">
                <img className="imagen-detalles" src={"/" + item.imagen} alt=""/>
                <div>
                    <h1>{item.destino}</h1>
                    <h2 className="lugar-css">{item.lugar}</h2>
                    <p>Estadía:{item.estadia}</p>
                    <p>Hotel:"{item.hotel}".</p>
                    <p>Excursiones:"{item.excursiones}".</p>
                    {
                        itemCount === 0
                        ? <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                        : <Link to="/cart"><button className="botones-css">Carrito</button></Link> 
                    }
                    <h3>${item.precio}</h3>
                </div>
            </div>
        </div>
    );
}



export default ItemDetail;