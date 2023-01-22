import React, { useState } from 'react';
import './Search.css';
export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        onSearch(city);
        setCity('');
    }
    function onChange(e) {
        setCity(e.target.value);
    }
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
