import {Navigate} from "react-router-dom";
import {ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

function ProtectedRoute({children}: ProtectedRouteProps) {
    const isAuth = localStorage.getItem("isAuth");

    if (!isAuth) {
        return <Navigate to="/"/>
    }
                         return children;
}
export default ProtectedRoute;