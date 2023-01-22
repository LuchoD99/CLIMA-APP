// import logo from './logo.svg';
import { useState } from 'react';
// import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
// import data, { Cairns } from './data';
import NavBar from './components/NavBar/NavBar';
function App() {
    const [cities, setCities] = useState([]); // cities son variable y setCities es una function
    function onSearch(ciudad) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=61976988447f1f24833b2e7d8d8a2499&units=metric`
        ) // se conecta a la red
            .then((r) => r.json()) //promete que lo convierte en json
            .then((recurso) => {
                // promete que
                if (recurso.cod === '404') {
                    //si es igual es un error
                    alert('Ciudad no encontrada');
                } else {
                    const ciudad = {
                        // se crea un obj
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon,
                    };
                    setCities((oldcities) => [...oldcities, ciudad]); //agrega al array la sig ciudad
                }
            });
    }
    function onClose(idCity) {
        setCities((oldcities) =>
            oldcities.filter((city) => city.id !== idCity)
        ); //filtra si son distinto los id
    }
    return (
        <div className="App">
            <NavBar onSearch={onSearch} />
            <Cards cities={cities} onClose={onClose} />
        </div>
    );
}

export default App;
