// import logo from './logo.svg';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Ciudad from './components/Ciudad/Ciudad';
import Home from './components/Home/Home';
// import data, { Cairns } from './data';
import NavBar from './components/NavBar/NavBar';
function App() {
    // function onFilter(ciudadId) {
    //     let ciudad = cities.filter((e) => e.id === parseInt(ciudadId));
    //     if (ciudad.length > 0) {
    //         return ciudad[0];
    //     } else {
    //         return null;
    //     }
    // }

    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                {/* <Route path="/" element={<NavBar />} /> */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<Cards cities={cities} />} /> */}
                {/* <Cards cities={cities} onClose={onClose} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/ciudad/:id" element={<Ciudad />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
