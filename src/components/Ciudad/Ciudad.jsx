import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CiudadDetalles } from '../redux/action';
import Error from '../Error/Error';
import './Ciudad.css';
export default function Ciudad() {
    let city = useSelector((state) => state.CiudadDetalles);
    let navigate = useNavigate();
    let { userId } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(CiudadDetalles(userId));
    }, [dispatch, userId]);
    function Back() {
        navigate('/');
    }
    return (
        <div className="center">
            {city.length ? (
                <div className="ciudad">
                    <h2 className="name">{city[0].name}</h2>
                    <img
                        className="iconoClima"
                        src={
                            'http://openweathermap.org/img/wn/' +
                            city[0].img +
                            '@2x.png'
                        }
                        alt="img not found"
                    />
                    <div className="datos">
                        <div>Temperatura: {city[0].temp} º</div>
                        <div>Clima: {city[0].weather}</div>
                        <div>Viento: {city[0].wind}</div>
                        <div>Cantidad de nubes: {city[0].clouds}</div>
                        <div>Latitud: {city[0].latitud} º</div>
                        <div>Longitud: {city[0].longitud} º</div>
                    </div>
                    <div className="botones">
                        <button className="btn2" onClick={() => Back()}>
                            Atras
                        </button>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </div>
    );
}
