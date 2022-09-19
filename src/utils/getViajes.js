
const boton = (id) => {
    console.log(`paquete elejido ${id}`);
}

export const dataFrom = [
    {
    id:1 ,
    imagen:"cataratasdeliguazu.jpg",
    destino:"Misiones",
    lugar:"Provincia de Misiones",
    hotel:"Los Amigos",
    stock: 50,
    excursiones:"Cataratas de Iguazú",
    precio:"50.000$",
    boton:{boton},
    categoryId: 2,
    category:{
        estacion: "verano",
        id:2
    }
    },
    {
    id:2 ,
    imagen:"ushuaia.jpg",
    destino:"Tierra del Fuego",
    lugar:"",
    hotel:"Chaparros",
    stock: 50,
    excursiones:"",
    precio:"350.000$",
    boton:{boton},
    categoryId: 5,
    category:{
        estacion: "invierno",
        id:5
    }
    },
    {
    id: 3 ,
    imagen:"jujuy7colores.jpg",
    destino:"Jujuy",
    hotel:"Rio de Janeiro",
    stock: 50,
    excursiones:"Playas de Rio",
    precio:"150.000$",
    boton:{boton},
    categoryId: 2,
    category:{
        estacion: "verano",
        id:2
    }
    },
    {
    id: 4 ,
    imagen:"mendozaAconcagua.jpg",
    destino:"Mendoza",
    hotel:"",
    stock: 50,
    excursiones:"Torre de Pizza",
    precio:"500.000$",
    boton:{boton},
    categoryId: 5,
    category:{
        estacion: "invierno",
        id:5
    }
    },
    {
    id: 5 ,
    imagen:"jujuy.jpg",
    destino:"Jujuy",
    lugar:"California",
    hotel:"",
    stock: 50,
    excursiones:"Disney",
    precio:"750.000$",
    boton:{boton},
    categoryId: 2,
    category:{
        estacion: "verano",
        id:2
    }
    },
    {
        id: 6 ,
        imagen:"cordoba.jpg",
        destino:"Cordoba",
        lugar:"",
        hotel:"",
        stock: 50,
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton},
        categoryId: 2,
        category:{
            estacion: "verano",
            id:2
        }
        },
    {
        id: 7 ,
        imagen:"buenosAires.jpg",
        destino:"Buenos Aires",
        lugar:"Barcelona",
        hotel:"",
        stock: 50,
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton},
        categoryId: 2,
        category:{
            estacion: "verano",
            id:2
        }
    },
    {
        id: 8 ,
        imagen: "termas-entrerios.jpg",
        destino:"Entre Rios",
        lugar:"",
        hotel:"",
        stock: 50,
        excursiones:"Disney",
        precio:"750.000$",
        boton:{boton},
        categoryId: 2,
        category:{
            estacion: "verano",
            id:2
        }
    },
    {
        id: 9 ,
        imagen:"peritomoreno.jpg",
        lugar:"Glaciar Perito Moreno",
        destino:"Santa Cruz",
        hotel:"RocaMar",
        stock: 50,
        excursiones:"Recorrido turístico por bodega y cata de vinos",
        precio:"100.000$",
        boton:{boton},
        categoryId: 5,
        category:{
            estacion: "invierno",
            id:5
        }
    },
    {
        id: 10 ,
        imagen:"bariloche2.jpg",
        lugar:"Rio Negro",
        destino:"Rio Negro",
        hotel:"RocaMar",
        stock: 50,
        excursiones:"Recorrido turístico por bodega y cata de vinos",
        precio:"100.000$",
        boton:{boton},
        categoryId: 5,
        category:{
            estacion: "invierno",
            id:5
        }
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
