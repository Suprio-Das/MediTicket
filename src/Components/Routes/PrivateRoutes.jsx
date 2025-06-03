import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../Context/AuthContext";
import Loader from "../Shared/Loader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;