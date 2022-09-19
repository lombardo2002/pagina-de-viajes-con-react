import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} de pasajes al carrito`)
    }

    return (
        <div className="Imagen-container2">
            <div>
                <img src={item.imagen}/>
            <h1 className="destino-css">{item.destino}</h1>
            <p className="lugar-css">{item.lugar}</p>
            <img className="imagen-css" src={item.imagen}/>
            <p className="hospedaje">Hospedaje en Hotel:{item.hotel}</p>
            <p className="hospedaje">Excursion:{item.excursiones}</p>
            <ItemCount
            initial={1} stock={5} onAdd={onAdd}/>
            </div>
            <div className="precio-css">
                <h3>${item.precio}</h3>
            </div>
        </div>
    );
}



export default ItemDetail;