import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import users from '../data/usuarios.json'

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    role: string | null;
    error: string | null;
}

const initialState: AuthState ={
    isAuthenticated: false,
    user: null,
    role: null,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const { username, password } = action.payload;
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                state.isAuthenticated = true;
                state.user = user.username;
                state.role = user.role;
                state.error = null;
            }else{
                state.error = 'Credenciales invalidas'
            };
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;