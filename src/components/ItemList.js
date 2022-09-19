import Item from "./Item";
    const ItemList = ({ destino }) => {
        return (
            <>
            {
            destino
            ? destino.map(data => <Item key={destino.id} destinos={destino.lugar}/>)
            : <p>Cargando...</p>
            }
            </>
        );
    }

    export default ItemList;