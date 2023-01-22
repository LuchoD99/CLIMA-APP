import React from 'react';

export default function Card({ min, max, name, img, onClose, id }) {
    return (
        <div className="card">
            <div>
                <button onClick={() => onClose(id)}>X</button>
            </div>
            <div>
                <h5>{name}</h5>
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
