export const CIUDAD_CARGADA = 'CIUDAD_CARGADA';
export const ELIMINAR_CIUDAD = 'ELIMINAR_CIUDAD';
export const CIUDAD_DETALLES = 'CIUDAD_DETALLES';

export function Ciudades(ciudad) {
    return function (dispatch) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=61976988447f1f24833b2e7d8d8a2499&units=metric`
        )
            .then((e) => e.json())
            .then((data) => {
                const ciudad = {
                    // se crea un obj
                    min: Math.round(data.main.temp_min),
                    max: Math.round(data.main.temp_max),
                    img: data.weather[0].icon,
                    id: data.id,
                    wind: data.wind.speed,
                    temp: data.main.temp,
                    name: data.name,
                    weather: data.weather[0].main,
                    clouds: data.clouds.all,
                    latitud: data.coord.lat,
                    longitud: data.coord.lon,
                };
                dispatch({
                    type: CIUDAD_CARGADA,
                    payload: ciudad,
                });
            })
            .catch((err) => {
                alert('Ciudad no encontrada');
            });
    };
}

export function EliminarCiudad(id) {
    return {
        type: ELIMINAR_CIUDAD,
        payload: id,
    };
}

export function CiudadDetalles(idCiudad) {
    return {
        type: CIUDAD_DETALLES,
        payload: idCiudad,
    };
}

// function onSearch(ciudad) {
//     fetch(
//         `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=61976988447f1f24833b2e7d8d8a2499&units=metric`
//     ) // se conecta a la red
//         .then((r) => r.json()) //promete que lo convierte en json
//         .then((recurso) => {
//             // promete que
//             if (recurso.cod === '404') {
//                 //si es igual es un error
//                 alert('Ciudad no encontrada');
//             } else {
//                 const ciudad = {
//                     // se crea un obj
//                     min: Math.round(recurso.main.temp_min),
//                     max: Math.round(recurso.main.temp_max),
//                     img: recurso.weather[0].icon,
//                     id: recurso.id,
//                     wind: recurso.wind.speed,
//                     temp: recurso.main.temp,
//                     name: recurso.name,
//                     weather: recurso.weather[0].main,
//                     clouds: recurso.clouds.all,
//                     latitud: recurso.coord.lat,
//                     longitud: recurso.coord.lon,
//                 };
//                 setCities((oldcities) => [...oldcities, ciudad]); //agrega al array la sig ciudad
//             }
//         });
// }
