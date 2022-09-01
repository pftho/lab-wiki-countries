import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countriesData }) {
  const { id } = useParams();

  console.log(useParams());

  const foundCountry = countriesData.find((country) => {
    console.log(country.alpha3Code);
    return country.alpha3Code === id;
  });

  console.log(foundCountry);
  return (
    <div>
      {foundCountry && (
        <>
          <div className="col-7">
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
                          <li>
                            <Link to={`/${borderCode}`}>
                              {countriesData.map((country) => {
                                if (country.alpha3Code === borderCode) {
                                  console.log(country.name.common);
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
