import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { CurrencyProvider } from "./context/CurrencyContext";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import './scss/global.scss';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CurrencyProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<PrivateRoute />}>
                      <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </CurrencyProvider>
      </ThemeProvider>
  );
};

export default App;
