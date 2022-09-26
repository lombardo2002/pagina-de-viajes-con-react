import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";

export const CartWidget = () => {
    const {calcItemsCantidad} = useContext(cartContext);

    if(calcItemsCantidad() == 0){
        return(
            <div className="icono-carrito">
                <i className="bi bi-cart-plus"></i>
                <p className="pNumeroCarrito"></p>
            </div>
        );
    }

    return(
        <div className="icono-carrito">
        <i className="bi bi-cart-plus"></i>
        <p className="pNumeroCarrito">{calcItemsCantidad()}</p>
    </div>
    );
}

export default CartWidget;