import Imagen from "../components/imagen";

const Imagenes = () => {

    const boton = (id) => {
        console.log(`paquete elejido ${id}`);
    }

    return(
        <>
            <Imagen
            id="1"
            imagen="../components/img/mexico ddlm.jpg"
            destino="Argentina"
            lugar="Provincia de Misiones"
            hotel="Los Amigos"
            excursiones="Cataratas de Iguazú"
            precio="50.000$"
            boton={boton}
            />
            <Imagen
            id="2"
            imagen=""
            destino="México"
            lugar=""
            hotel="Chaparros"
            excursiones=""
            precio="350.000$"
            boton={boton}
            />
            <Imagen
            id="3"
            imagen=""
            destino="Brasil"
            hotel="Rio de Janeiro"
            excursiones="Playas de Rio"
            precio="150.000$"
            boton={boton}
            />
            <Imagen
            id="4"
            imagen=""
            destino="Italia"
            hotel=""
            excursiones="Torre de Pizza"
            precio="500.000$"
            boton={boton}
            />
            <Imagen
            id="5"
            imagen="Estados Unidos"
            destino="California"
            hotel=""
            excursiones="Disney"
            precio="750.000$"
            boton={boton}
            />
        </>
    )
}

export default Imagenes;