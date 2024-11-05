import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
    currency: Record<string, any>;
    selectedCurrency: string;
    rates: Record<string, any>;
    error: string | null;
}

const initialState: CurrencyState = {
    currency: {},
    selectedCurrency: 'MXN',
    rates: {},
    error: null,
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrencies: (state, action: PayloadAction<Record<string, string>>) => {
            state.currency = action.payload;
        },
        setRates: (state, action: PayloadAction<Record<string, number>>) => {
            state.rates = action.payload;
        },
        setSelectCurrency: (state, action: PayloadAction<string>) => {
            state.selectedCurrency = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setCurrencies, setRates, setSelectCurrency, clearError } =currencySlice.actions;

export default currencySlice.reducer;