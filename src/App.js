// import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
// import data, { Cairns } from './data';
import NavBar from './components/NavBar/NavBar';
function App() {
    const [cities, setCities] = useState([]); // cities son variable y setCities es una function

    // function onClose(idCity) {
    //     setCities((oldcities) =>
    //         oldcities.filter((city) => city.id !== idCity)
    //     ); //filtra si son distinto los id
    // }
    // function onFilter(ciudadId) {
    //     let ciudad = cities.filter((e) => e.id === parseInt(ciudadId));
    //     if (ciudad.length > 0) {
    //         return ciudad[0];
    //     } else {
    //         return null;
    //     }
    // }

    // return (
    //     <div className="App">
    //         <NavBar onSearch={onSearch} />
    //         <Cards cities={cities} onClose={onClose} />
    //     </div>
    // );
    return (
        <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/" element={<Cards cities={cities} />} />

            {/* <Cards cities={cities} onClose={onClose} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/ciudad:id" element={'ciudad'} />
        </Routes>
    );
}

export default App;
