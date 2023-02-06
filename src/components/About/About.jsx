import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className="centrar">
            <div className="detalle">
                <h3>Sobre mi:</h3>
                <p>
                    Esta aplicación está creada por Luciano Diaz e informa las
                    condiciones meteorológicas de las diferentes ciuadades del
                    mundo.
                </p>
                <h4 className="credito">Luciano Diaz</h4>
                <Link to={'/'}>
                    <button className="btn3">home</button>
                </Link>
            </div>
        </div>
    );
}

export default About;
