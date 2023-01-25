import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Search/Search';
import inicio from '../../image/inicio.png';
// import About from '../About/About';
export default function NavBar({ onSearch }) {
    return (
        <nav>
            <Link to={'/'}>
                <img
                    src={inicio}
                    alt="img not found"
                    height={'35px'}
                    width="35px"
                />
            </Link>
            <Link to="/about">
                {/* <About /> */}
                <span>About</span>
            </Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
}
