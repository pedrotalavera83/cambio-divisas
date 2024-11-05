import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import authSlice from "./authSlice";


export const store = configureStore({
    reducer: {
        currency: currencySlice,
        auth: authSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;