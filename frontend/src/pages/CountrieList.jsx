import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountriesList.css"; // Archivo de estilos para los países

const CountriesList = ({ searchTerm }) => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/api/countries")
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error al obtener los países:", error));
    }, []);
  
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  
    return (
      <div className="countries-container">
        <h1>Countries</h1>
        <div className="countries-grid">
          {filteredCountries.map((country) => (
            <Link
              to={`/country/${country.name}`}
              key={country.name}
              className="country-card"
            >
              <img
                src={country.flag}
                alt={`Bandera de ${country.name}`}
                className="country-flag"
              />
              <p className="country-name">{country.name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  export default CountriesList;