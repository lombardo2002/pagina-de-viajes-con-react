import { useContext } from "react";
import { cartContext } from "./CartContext";

const Cart = () => {
    const { cartList, clear } = useContext(cartContext);

    return (
        <>
            <h1 className="cart" >Hola, soy carrito </h1>
            <button className="botones-css" onClick={clear}>Eliminar todos los destinos</button>
            {
                cartList.map(item => <li className="carrito">{item.destino}{item.precio}{item.lugar}<button>Eliminar Destino</button></li>)
            }
        </>
    );
}

export default Cart;