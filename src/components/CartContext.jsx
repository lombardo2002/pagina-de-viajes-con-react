import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, cantidad) =>{
        if(IsInCart(item.id)){
            setCartList(cartList.map(destino => {
                return destino.id === item.id ? { ...destino, cantidad: destino.cantidad + cantidad } : destino
            }));
        } else {
            setCartList([...cartList, {...item, cantidad}]);
        }
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].cantidadItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcItemsCantidad = () => {
        let cantidad = cartList.map(item => item.cantidadItem);
        return cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const IsInCart = (id) => cartList.find(destino => destino.id === parseInt(id)) ? true : false;

    const removeItem = (id) => setCartList(cartList.filter((destino) => destino.id !==id));

    const clear = () =>{
        setCartList([])
    }

    return (
        <cartContext.Provider value={{cartList, addItem, clear, IsInCart, removeItem, calcTotalPorItem, calcSubTotal, calcItemsCantidad}} >
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;

