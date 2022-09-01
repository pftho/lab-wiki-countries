import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CountriesList({ countriesData }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countriesData.map((country) => {
            return (
              <div key={uuidv4()} className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
