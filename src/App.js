import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countryData from './countries.json';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

const api = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  // const [countriesData, setData] = useState(countryData);
  const [countriesData, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get(api).then((response) => {
      setData(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          {fetching && <p>Loading ...</p>}
          <CountriesList countriesData={countriesData} />
          <Routes>
            <Route
              path=":id"
              element={<CountryDetails countriesData={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
