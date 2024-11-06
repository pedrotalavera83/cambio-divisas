import React from "react";
import { useReduxSelector } from "../hooks/reduxHooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
    const isAuthenticated = useReduxSelector(state => state.auth.isAuthenticated);

    return isAuthenticated  ? <Outlet /> : <Navigate to ='/login' replace />;
};

export default PrivateRoute;