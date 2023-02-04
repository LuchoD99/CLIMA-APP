import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
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
                <div>
                    <div>
                        <p>Min</p>
                        <p>{min}°</p>
                    </div>
                    <div>
                        <p>Max</p>
                        <p>{max}°</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
