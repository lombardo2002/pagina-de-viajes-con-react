import { useContext } from "react";
import { cartContext } from "./CartContext";

const Cart = () => {
    const { cartList, clear, removeItem } = useContext(cartContext);

    return (
        <>
            <h1 className="cart" >Hola, soy carrito </h1>
            <button className="botones-css" onClick={clear}>Eliminar todos los destinos</button>
            {
                cartList.map(destino => 
                    <div className="carrito-d">
                        <div key={destino.id}>
                            <div>
                            <div className="carrito">
                                <img className="img-cart" src={destino.imagen} alt={destino.destino}/>
                            </div>
                            <div>
                                <h5>{destino.destino}</h5>
                                <p>cantidad de pasajes seleccionados: {destino.cantidad}</p>
                                <p>Precio: ${destino.precio} c/u</p>
                            </div>
                            <div>
                                <button onClick={() => removeItem(destino.id)} className="botones-css" type="submit">Eliminar Paquete</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
            }
        </>
    );
}

export default Cart;