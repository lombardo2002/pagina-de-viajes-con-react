let is_ok = true
let customFetch = (time, array) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if (is_ok) {
                resolve(array)
            } else {
                reject("hubo un error en elegir destino")
            }
        }, time)
    })
}

export default customFetch;