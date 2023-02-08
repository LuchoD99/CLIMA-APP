import React from 'react';
import './About.css';
import { VaciarDet } from '../redux/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function About() {
    // let detalles = useSelector((state) => state.CiudadDetalles);
    let dispatch = useDispatch();
    function Vaciar() {
        dispatch(VaciarDet(dispatch));
    }
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
                    <button onClick={() => Vaciar()} className="btn3">
                        home
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default About;
