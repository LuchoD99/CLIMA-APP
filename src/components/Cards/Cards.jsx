import React from 'react';
import Card from '../Card/Card';
import data from '../../data';

export default function Cards() {
    return (
        <>
            <div>
                {data.map((p) => (
                    <Card
                        name={p.name}
                        max={p.main.temp_max}
                        min={p.main.temp_min}
                        img={p.weather[0].icon}
                        key={p.id}
                    />
                ))}
            </div>
        </>
    );
}
