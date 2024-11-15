import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  // Fetch para obtener países desde el backend
  useEffect(() => {
    fetch("http://localhost:5000/api/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error al obtener los países:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Países</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <Link to={`/country/${country.name}`}>
              <img
                src={country.flag}
                alt={`Bandera de ${country.name}`}
                style={{ width: "30px", marginRight: "10px" }}
              />
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
