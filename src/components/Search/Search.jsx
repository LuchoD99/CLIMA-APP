import React from 'react';
import './Search.css';
export default function Search(prop) {
    return (
        <div className="center">
            <input className="texto" type="text" placeholder="Ciudad.." />
            <button
                className="boton"
                onClick={() => prop.onSearch('Buscando...')}
            >
                Agregar
            </button>
        </div>
    );
}
