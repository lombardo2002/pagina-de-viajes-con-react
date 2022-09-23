import "../App.css";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import ItemDetailContainer from "../components/ItemDetailContainer"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer";
import CartContextProvider from "../components/CartContext";


const Home = () => {
return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </CartContextProvider>
    );
}

export default Home;
