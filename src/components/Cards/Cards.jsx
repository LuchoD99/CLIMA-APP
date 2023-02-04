import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { EliminarCiudad } from '../redux/action';
// import data from '../../data';
import './Cards.css';

export default function Cards() {
    const cities = useSelector((state) => state.AllCiudad);
    const dispatch = useDispatch();

    function onClose(id) {
        dispatch(EliminarCiudad(id));
    }
    useEffect(() => {}, [cities]);

    return (
        <div>
            {cities.length ? (
                <div className="cards">
                    {cities.map((c, k) => {
                        return (
                            <div key={k}>
                                <Card
                                    key={k}
                                    max={c.max}
                                    min={c.min}
                                    name={c.name}
                                    img={c.img}
                                    onClose={onClose}
                                    id={c.id}
                                />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="no-ciudad">No hay ciudad</div>
            )}
        </div>
    );
}
