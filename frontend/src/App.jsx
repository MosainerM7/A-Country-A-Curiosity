import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountrieList";
import CountryCuriosity from "./pages/CountryCuriosity";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:name" element={<CountryCuriosity />} />
      </Routes>
    </Router>
  );
};

export default App;
