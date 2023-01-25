import React from 'react';

export default function Ciudad({ city }) {
    return (
        <div>
            <div>
                <h2>{city.name}</h2>
                <div>
                    <div>Temperatura: {city.temp}</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind}</div>
                    <div>Cantidad de nubes:{city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    );
}
