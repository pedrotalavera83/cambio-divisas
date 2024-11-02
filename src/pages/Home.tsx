import React from "react";
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Cambio de Divisas</h1>
            <CurrencyConverter />
        </div>
    );
}

export default Home;