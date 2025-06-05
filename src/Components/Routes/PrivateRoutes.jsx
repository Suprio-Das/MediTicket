import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../Context/AuthContext";
import Loader from "../Shared/Loader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={location?.pathname}></Navigate>
    );
};

export default PrivateRoutes;