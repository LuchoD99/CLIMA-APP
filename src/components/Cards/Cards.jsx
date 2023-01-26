import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { EliminarCiudad } from '../redux/action';
// import data from '../../data';
export default function Cards() {
    const cities = useSelector((state) => state.AllCiudad);
    const dispatch = useDispatch();

    function onClose(id) {
        dispatch(EliminarCiudad(id));
    }
    useEffect(() => {}, [cities]);

    return (
        <div className="cards">
            {cities.length ? (
                cities.map((c) => (
                    <Card
                        key={c.id}
                        max={c.max}
                        min={c.min}
                        name={c.name}
                        img={c.img}
                        onClose={onClose}
                        id={c.id}
                    />
                ))
            ) : (
                <div>No hay ciudad</div>
            )}
        </div>
    );
}
