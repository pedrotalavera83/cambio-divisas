import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface CurrencyContextProps {
    currencies: Record<string, any>;
    setCurrencies: Dispatch<SetStateAction<Record<string, any>>>;
    selectedCurrency: string;
    setSelectedCurrency: Dispatch<SetStateAction<string>>;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    rates: Record<string, any>;
    setRates: Dispatch<SetStateAction<Record<string, any>>>;
}

export const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

interface CurrencyProviderProps {
    children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
    const [currencies, setCurrencies] = useState<Record<string, any>>({});
    const [selectedCurrency, setSelectedCurrency] = useState<string>('MXN');
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10));
    const [rates, setRates] = useState<Record<string, any>>({});

    return (
        <CurrencyContext.Provider
            value={{
                currencies,
                setCurrencies,
                selectedCurrency,
                setSelectedCurrency,
                selectedDate,
                setSelectedDate,
                rates,
                setRates
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};