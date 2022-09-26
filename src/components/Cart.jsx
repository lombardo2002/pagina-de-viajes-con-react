
import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, clear, removeItem, calcTotalPorItem, calcSubTotal, calcItemsCantidad, precioFinal} = useContext(cartContext);

    if (cartList.length == 0) {
        return (
            <>
            <h1 className="cart" >Hola, soy carrito </h1>
            <Link to="/" ><button className="botones-css">Inicio</button> </Link>
            </>
        )
    }
    return (
        <>
            <h1 className="cart" >Hola, soy carrito </h1>
            <button className="botones-css" onClick={clear}>Eliminar todos los destinos</button>
            {
                cartList.map(destino => 
                    <div className="carrito-d" key={`${destino.id}`} >
                        <div>
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
            <div className="precio-final">
                <h5 className="carrito">Precio final de los destinos seleccionados</h5>
                <p className="carrito">${precioFinal()}</p>
                <button className="botones-css">Finalizar compra</button>
            </div>
        </>
    );
}

export default Cart;