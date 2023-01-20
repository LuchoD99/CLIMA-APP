import React from 'react';

export default function Card({ name, max, min, img }) {
    return (
        <div>
            <h5>{name}</h5>
            <p>Máx -- Min</p>
            <p>
                {max} -- {min}
            </p>
            <img
                src={`http://openweathermap.org/img/wn/${img}@2x.png`}
                alt="img not found"
            />
            <button onClick={() => alert(name)}>X</button>
        </div>
    );
}
