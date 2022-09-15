import Item from "./Item";
    const ItemList = ({ destinos }) => {
        return (
            <>
            {destinos.map((destino) => <Item key={destino.id} destino={destino}/>)}
            </>
        );
    }

    export default ItemList;