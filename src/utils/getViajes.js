
const boton = (id) => {
    console.log(`paquete elejido ${id}`);
}

const dataFrom = [
    {
    id:1 ,
    imagen:`mexicoddlm.jpg`,
    destino:"Argentina",
    lugar:"Provincia de Misiones",
    hotel:"Los Amigos",
    excursiones:"Cataratas de Iguazú",
    precio:"50.000$",
    boton:{boton}
    },
    {
    id:2 ,
    imagen:"../img/mexicoddlm.jpg",
    destino:"México",
    lugar:"",
    hotel:"Chaparros",
    excursiones:"",
    precio:"350.000$",
    boton:{boton}
    },
    {
    id: 3 ,
    imagen:"",
    destino:"Brasil",
    hotel:"Rio de Janeiro",
    excursiones:"Playas de Rio",
    precio:"150.000$",
    boton:{boton}
    },
    {
    id: 4 ,
    imagen:"",
    destino:"Italia",
    hotel:"",
    excursiones:"Torre de Pizza",
    precio:"500.000$",
    boton:{boton},
    },
    {
    id: 5 ,
    imagen:"",
    destino:"Estados Unidos",
    lugar:"California",
    hotel:"",
    excursiones:"Disney",
    precio:"750.000$",
    boton:{boton}
    },
    {
        id: 6 ,
        imagen:"",
        destino:"China",
        lugar:"",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
        },
    {
        id: 7 ,
        imagen:"",
        destino:"España",
        lugar:"Barcelona",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
    },
    {
        id: 8 ,
        imagen: "uruguay.jpg",
        destino:"Venezuela",
        lugar:"",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
    },
    {
        id: 9 ,
        imagen:"uruguay.jpg",
        lugar:"Montevideo",
        destino:"Uruguay",
        hotel:"RocaMar",
        excursiones:"Recorrido turístico por bodega y cata de vinos",
        precio:"100.000$",
        boton:{boton},
        detalles:"Viaje estimado para el mes de noviembre del 2022, tiene una duracion de 7 noches y 8 dias, incluyendo el recorrido que se realiza por Bus semicama con la empresa de Buquebus, ademas que el hotel incluye desayuno y merienda  "
    },
];

const getList = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(dataFrom);
        }, 2000)
    })
}  

export default getList;
