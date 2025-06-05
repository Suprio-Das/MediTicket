import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <PrivateRoutes>
                    <Home></Home>
                </PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/verification',
                element: <h1>Verification page.</h1>
            }
        ]
    }
])

export default router;