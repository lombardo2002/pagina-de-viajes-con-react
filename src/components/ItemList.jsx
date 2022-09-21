import Item from "./Item";
    const ItemList = ({ items }) => {
        return (
            <>
            {
            items
            ? items.map(item => <Item key={item.id} item={item}/>)
            : <p>Cargando...</p>
            }
            </>
        );
    }

    export default ItemList;