import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
    return (
        <div className="card">
            <div className="eliminar">
                <button className="btn" onClick={() => onClose(id)}>
                    X
                </button>
            </div>
            <div>
                <div className="title">
                    <NavLink to={`/ciudad/${id}`}>
                        <h5 className="card-title">{name}</h5>
                    </NavLink>
                    {/* <button onClick={() => Prueba(id)}>{name}</button> */}
                    <img
                        className="iconoClima"
                        src={
                            'http://openweathermap.org/img/wn/' +
                            img +
                            '@2x.png'
                        }
                        alt="img not found"
                    />
                </div>
                <div className="content">
                    <div>
                        <p>min</p>
                        <p>{min}°</p>
                    </div>
                    <div>
                        <p>máx</p>
                        <p>{max}°</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
