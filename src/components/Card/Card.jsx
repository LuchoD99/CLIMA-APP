import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { CiudadDetalles } from '../redux/action';
export default function Card({ min, max, name, img, onClose, id }) {
    // const dispatch = useDispatch();
    // function Prueba(id) {
    //     dispatch(CiudadDetalles(id));
    // }
    return (
        <div className="card">
            <div>
                <button onClick={() => onClose(id)}>X</button>
            </div>
            <div>
                <NavLink to={`/ciudad/${id}`}>
                    <h5>{name}</h5>
                </NavLink>
                {/* <button onClick={() => Prueba(id)}>{name}</button> */}
                <div>
                    <div>
                        <p>Min</p>
                        <p>{min}°</p>
                    </div>
                    <div>
                        <p>Max</p>
                        <p>{max}°</p>
                    </div>
                    <div>
                        <img
                            className="iconoClima"
                            src={
                                'http://openweathermap.org/img/wn/' +
                                img +
                                '@2x.png'
                            }
                            width="80"
                            height="80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
