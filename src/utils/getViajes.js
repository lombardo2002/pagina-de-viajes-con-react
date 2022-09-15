
const boton = (id) => {
    console.log(`paquete elejido ${id}`);
}

const dataFrom = [
    {
    id:"1",
    imagen:`../img/mexicoddlm.jpg`,
    destino:"Argentina",
    lugar:"Provincia de Misiones",
    hotel:"Los Amigos",
    excursiones:"Cataratas de Iguazú",
    precio:"50.000$",
    boton:{boton}
    },
    {
    id:"2",
    imagen:"../img/mexicoddlm.jpg",
    destino:"México",
    lugar:"",
    hotel:"Chaparros",
    excursiones:"",
    precio:"350.000$",
    boton:{boton}
    },
    {
    id:"3",
    imagen:"",
    destino:"Brasil",
    hotel:"Rio de Janeiro",
    excursiones:"Playas de Rio",
    precio:"150.000$",
    boton:{boton}
    },
    {
    id:"4",
    imagen:"",
    destino:"Italia",
    hotel:"",
    excursiones:"Torre de Pizza",
    precio:"500.000$",
    boton:{boton},
    },
    {
    id:"5",
    imagen:"",
    destino:"Estados Unidos",
    lugar:"California",
    hotel:"",
    excursiones:"Disney",
    precio:"750.000$",
    boton:{boton}
    },
    {
        id:"6",
        imagen:"",
        destino:"China",
        lugar:"",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
        },
    {
        id:"7",
        imagen:"",
        destino:"España",
        lugar:"Barcelona",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
    },
    {
        id:"8",
        imagen:"",
        destino:"Venezuela",
        lugar:"",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
    },
    {
        id:"9",
        imagen:"Uruguay",
        lugar:"Montevideo",
        destino:"California",
        hotel:"",
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton}
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
