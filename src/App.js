import "./App.css";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>} />
      </Routes>
      <ItemDetailContainer/>
    </BrowserRouter>
    </>
  );
}

export default App;
