import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CiudadDetalles } from '../redux/action';
export default function Ciudad() {
    const city = useSelector((state) => state.CiudadDetalles);
    const id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CiudadDetalles(id));
    }, [dispatch, id]);
    return (
        <div>
            {city.length ? (
                <div>
                    <h2>{city.name}</h2>
                    <div>
                        <div>Temperatura: {city[0].temp}</div>
                        <div>Clima: {city[0].weather}</div>
                        <div>Viento: {city[0].wind}</div>
                        <div>Cantidad de nubes:{city[0].clouds}</div>
                        <div>Latitud: {city[0].latitud}º</div>
                        <div>Longitud: {city[0].longitud}º</div>
                    </div>
                </div>
            ) : (
                <div>holaa</div>
            )}
        </div>
    );
}
