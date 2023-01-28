import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Search/Search';
import inicio from '../../image/inicio.png';
// import About from '../About/About';
export default function NavBar({ onSearch }) {
    return (
        <nav className="navbar">
            <Link to={'/'}>
                <img className="image" src={inicio} alt="img not found" />
            </Link>
            <Link to="/about">
                {/* <About /> */}
                <span className="about">About</span>
            </Link>
            <SearchBar className="buscador" onSearch={onSearch} />
        </nav>
    );
}
