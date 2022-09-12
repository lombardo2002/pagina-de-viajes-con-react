import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Imagenes from "./containers/Imagenes";


const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hace tu Sueño de Viajar una Realidad"/>
      <Imagenes/>
    </>
  );
}

export default App;
