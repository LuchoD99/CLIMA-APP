import React from 'react';

export default function Search(prop) {
    return (
        <div>
            <input type="text" placeholder="Ciudad.." />
            <button onClick={() => prop.onSearch('Buscando...')}>
                Agregar
            </button>
        </div>
    );
}
