import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountrieList";
import CountryCuriosity from "./pages/CountryCuriosity";
import Header from "./Components/Header";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<CountriesList searchTerm={searchTerm} />}
        />
        <Route path="/country/:name" element={<CountryCuriosity />} />
      </Routes>
    </Router>
  );
};

export default App;