// import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import data, { Cairns } from './data';

function App() {
    return (
        <div className="App">
            <div>
                <Search onSearch={(ciudad) => alert(ciudad)} />
            </div>
            <div>
                <Card
                    max={Cairns.main.temp_max}
                    min={Cairns.main.temp_min}
                    name={Cairns.name}
                    img={Cairns.weather[0].icon}
                    onClose={() => alert(Cairns.name)}
                />
            </div>
            <hr />
            <div>
                <Cards cities={data} />
            </div>
            <hr />
        </div>
    );
}

export default App;
