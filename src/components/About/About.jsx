import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div>
            <h3>Soy Luciano</h3>
            <p>
                Esta aplicación está creada por Luciano e informa las
                condiciones meteorológicas de las diferentes ciuadades del
                mundo.
            </p>
            <Link to={'/'}>
                <button>Atras</button>
            </Link>
        </div>
    );
}

export default About;
