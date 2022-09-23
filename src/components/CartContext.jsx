import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (destino, cantidad) =>{
        setCartList([...cartList,destino])
    }

    const clear = () =>{
        setCartList([])
    }

    return (
        <cartContext.Provider value={{cartList, addItem, clear}} >
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;

