// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
// import data, { Cairns } from './data';

function App() {
    // const [ciudad, setCiudad] = useState([]);
    // function onSearch(ciudad) {
    //     fetch(
    //         `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=61976988447f1f24833b2e7d8d8a2499&units=metric`
    //     )
    //         .then((e) => e.json())
    //         .then((resp) => {
    //             if (resp.cod === '404') {
    //                 alert('Ciudad no encontrada');
    //             } else {
    //                 const ciudad = {
    //                     // se crea un obj
    //                     min: Math.round(resp.main.temp_min),
    //                     max: Math.round(resp.main.temp_max),
    //                     img: resp.weather[0].icon,
    //                     id: resp.id,
    //                     wind: resp.wind.speed,
    //                     temp: resp.main.temp,
    //                     name: resp.name,
    //                     weather: resp.weather[0].main,
    //                     clouds: resp.clouds.all,
    //                     latitud: resp.coord.lat,
    //                     longitud: resp.coord.lon,
    //                 };
    //                 setCiudad((Allcities) => [...Allcities, ciudad]);
    //             }
    //         });
    // }

    // function onClose(id) {}
    return (
        <div className="App">
            <Search />
            <Cards />
        </div>
    );
}

export default App;
