import React from "react";
import "./Header.css"; // Estilos para el header

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1>Curiosidades de Países</h1>
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
