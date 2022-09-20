import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} de pasajes al carrito`)
    }


    return (
        <div>
            <div className="cardDestino">
                <img className="imagen-detalles" src={"/" + item.imagen} alt=""/>
                <div>
                    <h1>{item.destino}</h1>
                    <h2 className="lugar-css">{item.lugar}</h2>
                    <p>Hotel:"{item.hotel}".</p>
                    <p>Excursiones:"{item.excursiones}".</p>
                    <ItemCount
                    initial={1} stock={5} onAdd={onAdd}/>
                    <h3>${item.precio}</h3>
                </div>
            </div>
        </div>
    );
}



export default ItemDetail;