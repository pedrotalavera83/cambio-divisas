import React from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CurrencyProvider>
  );
};

export default App;
