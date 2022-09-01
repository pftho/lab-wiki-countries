import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countryData from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countriesData, setData] = useState(countryData);
  console.log(countriesData);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countriesData={countriesData} />
      <Routes>
        <Route
          path=":id"
          element={<CountryDetails countriesData={countriesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
