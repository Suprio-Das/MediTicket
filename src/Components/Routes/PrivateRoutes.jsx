import { Navigate } from "react-router";

const PrivateRoutes = () => {
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;