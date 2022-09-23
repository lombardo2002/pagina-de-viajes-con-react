import Item from "./Item";
    const ItemList = ({ items }) => {
        return (
            <div className="inicio">
            {
            items
            ? items.map(item => <Item key={item.id} item={item}/>)
            : <p>Cargando...</p>
            }
            </div>
        );
    }

    export default ItemList;