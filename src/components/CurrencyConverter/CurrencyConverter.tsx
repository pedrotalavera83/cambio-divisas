import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { fetchCurrecies, fetchRates } from "../../api/RateAPI";
import { CurrencyContext, CurrencyContextProps } from "../../context/CurrencyContext";
import './CurrencyConverter.scss'
import { Alert, Button, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";


const CurrencyConverter: React.FC = () => {
    const context = useContext<CurrencyContextProps | undefined>(CurrencyContext);
    if (!context) {
        throw new Error("CurrencyContext no está disponible");
    }

    const {
        currencies, setCurrencies,
        selectedCurrency, setSelectedCurrency,
        baseCurrency, setBaseCurrency,
        selectedDate, setSelectedDate,
        rates, setRates
    } = context;

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCurrencies = async () => {
            try {
                const data = await fetchCurrecies();
                setCurrencies(data);
            } catch (err) {
                setError('Error al obtener las monedas');
            }

        }
        getCurrencies();
    }, [setCurrencies]);

    const handleConvert = async () => {
        try {
            const data = await fetchRates(selectedDate, baseCurrency, selectedCurrency)
            setRates(data.rates);
        } catch (err) {
            setError('Error al convertir las monedas')
        }
    }

    const handleBaseCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBaseCurrency(e.target.value)
    }

    const handleCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedCurrency(e.target.value)
    }

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value)
    }

    return (
        <div className="currency-converter">
            {error && <Alert severity="error" className="error">{error}</Alert>}
            <TextField
                select
                label="Moneda base"
                value={baseCurrency}
                onChange={handleBaseCurrencyChange}
                variant="outlined"
                fullWidth
                className="select-field"
            >
                {Object.keys(currencies).map((key) => (
                    <MenuItem
                        key={key}
                        value={key}
                    >{currencies[key]}</MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Moneda destino"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                variant="outlined"
                fullWidth
                className="select-field"
            >
                {Object.keys(currencies).map((key) => (
                    <MenuItem
                        key={key}
                        value={key}
                    >{currencies[key]}</MenuItem>
                ))}
            </TextField>
            <TextField
                type="date"
                label="Fecha"
                value={selectedDate}
                onChange={handleDateChange}
                variant="outlined"
                fullWidth
                className="select-field"
            />
            <Button
                className="convert-button"
                variant="contained"
                color="primary"
                onClick={handleConvert}
            >
                Convertir
            </Button>
            <TableContainer component={Paper} className="rate-table">
                <Table>
                    <TableBody>
                        {Object.entries(rates).map(([key, value]) => (
                            <TableRow key={key}>
                                <TableCell component='th' scope="row">
                                    {`1 ${baseCurrency} a ${selectedCurrency}`}
                                </TableCell>
                                <TableCell align="right">
                                    {`${value} ${key}`}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CurrencyConverter;