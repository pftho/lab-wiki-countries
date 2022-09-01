import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CountryDetails({ countriesData }) {
  const { id } = useParams();

  console.log(useParams());

  const foundCountry = countriesData.find((country) => {
    console.log(country.alpha3Code);
    return country.alpha3Code === id;
  });

  console.log(foundCountry);
  return (
    <div className="col-7">
      {foundCountry && (
        <>
          <div>
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {foundCountry.borders.map((borderCode) => {
                        return (
                          <li key={uuidv4()}>
                            <Link to={`/${borderCode}`}>
                              {countriesData.map((country) => {
                                if (country.alpha3Code === borderCode) {
                                  return country.name.common;
                                }
                              })}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
