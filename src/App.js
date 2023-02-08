import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';

import Ciudad from './components/Ciudad/Ciudad';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ciudad/:userId" element={<Ciudad />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
