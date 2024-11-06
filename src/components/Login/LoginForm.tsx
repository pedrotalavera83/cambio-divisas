import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";
import './LoginForm.scss';
import { useReduxSelector, useReduxDispach } from "../../hooks/reduxHooks";
import { Button, TextField } from "@mui/material";

export const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useReduxDispach();
    const isAuthenticated = useReduxSelector((state) => state.auth.isAuthenticated);
    const error = useReduxSelector((state) => state.auth.error);
    const navigate = useNavigate();

    useEffect(() => {
            if (isAuthenticated) {
                navigate('/home');
            }
        }, [isAuthenticated, navigate]);

    const handleLogin = () => {
        dispatch(login({ username, password }));
    };

    return (
        <div className="login-form">
            <TextField 
                label='Username'
                value={username}
                className="select-field"
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
            />

            <TextField 
                label='Contraseña'
                type="password"
                value={password}
                className="select-field"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />
            <div className="button-container">
                <Button
                onClick={handleLogin}
                variant="contained"
                color="primary"
                >Entrar</Button>
            </div>
            {error && <p>Username o contraseña incorrectos, intenta de nuevo</p>}
        </div>
    );
};