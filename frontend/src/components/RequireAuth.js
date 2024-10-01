import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        // auth?.roles?.find(role => allowedRoles?.includes(role))
        auth?.role

            ? <Outlet />
            // : auth?.user
                :  <Navigate to="/admin" state={{ from: location }} replace />
                // <Navigate to="/unauthorized" state={{ from: location }} replace />
                
    );
}

export default RequireAuth;