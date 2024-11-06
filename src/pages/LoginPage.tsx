import React from "react";
import { LoginForm } from "../components/Login/LoginForm";
import'../scss/LoginPage.scss';

const LoginPage: React.FC = () => {
    return (
        <div className='login-page'>
            <div className='login-container'>
                <h1>Iniciar seción</h1>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;