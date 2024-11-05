import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";
import './LoginForm.scss';
import { useReduxSelector, useReduxDispach } from "../../hooks/reduxHooks";

export const LoginForm: React.FC = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useReduxDispach();
    const isAuthenticated = useReduxSelector((state) => state.auth.isAuthenticated);
    const error = useReduxSelector((state) => state.auth.error);
    const navigate = useNavigate();
    useEffect(
        () => {
            if (isAuthenticated) {
                navigate('/home');
            }
        },
        [isAuthenticated, navigate]
    );

    const handleLogin = () => {
        dispatch(login({ username, password }));
    };

    return (
        <h1>
            Esta vivo
        </h1>
    )
};