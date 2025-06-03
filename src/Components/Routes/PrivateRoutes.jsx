import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../Context/AuthContext";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;