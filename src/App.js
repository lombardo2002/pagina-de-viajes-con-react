import "./App.css";
import Navbar from "./components/Navbar";
import Imagenes from "./containers/Imagenes";
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {
  return (
    <>
      <Navbar />
      <ItemDetailContainer/>
      <Imagenes/>
    </>
  );
}

export default App;
