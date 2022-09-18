import ItemCount from "./ItemCount";


const ItemDetail = ({data}) => {

    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} de pasajes al carrito`)
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
            initial={1} stock={5} onAdd={onAdd}/>
            </div>
            <div className="precio-css">
                <h3>${data.precio}</h3>
            </div>
        </div>
    );
}



export default ItemDetail;