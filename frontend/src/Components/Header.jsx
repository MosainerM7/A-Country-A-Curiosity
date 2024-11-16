import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // Estilos para el header

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navega hacia la página anterior
  };

  return (
    <header className="header">
      <button className="back-button" onClick={goBack}>
        Volver
      </button>
      <h1>One Country One Curiosity</h1>
      <input
        type="text"
        placeholder="Buscar un país..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)} // Llamamos a la función onSearch pasada como props
      />
    </header>
  );
};

export default Header;
