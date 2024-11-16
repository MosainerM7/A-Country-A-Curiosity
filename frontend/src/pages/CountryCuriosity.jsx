import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryCuriosity.css"; // Importar los estilos

const CountryCuriosity = () => {
  const { name } = useParams();
  const [curiosity, setCuriosity] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/countries/${name}/fact`)
      .then((response) => response.json())
      .then((data) => setCuriosity(data.fact))
      .catch((error) => console.error("Error al obtener la curiosidad:", error));
  }, [name]);

  return (
    <div className="country-curiosity">
      <div className="country-curiosity-card">
        <h1>Curiosidad de {name}</h1>
        {curiosity ? <p>{curiosity}</p> : <p>Cargando curiosidad...</p>}
      </div>
    </div>
  );
};

export default CountryCuriosity;
