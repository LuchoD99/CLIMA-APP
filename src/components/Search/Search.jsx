import React, { useState } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import { Ciudades } from '../redux/action';
import { useNavigate } from 'react-router-dom';
export default function SearchBar() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    function onSubmit(e) {
        e.preventDefault();
        dispatch(Ciudades(city));
        setCity('');
        navigate('/');
    }
    function onChange(e) {
        setCity(e.target.value);
    }
    const navigate = useNavigate();
    return (
        <form className="center" onSubmit={(e) => onSubmit(e)}>
            <input
                className="texto"
                type="text"
                placeholder="Ciudad..."
                value={city}
                onChange={(e) => onChange(e)}
            />
            <input className="boton" type="submit" value="Agregar" />
        </form>
    );
}
