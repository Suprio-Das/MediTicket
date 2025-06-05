import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import TicketVerification from "../TicketVerification/TicketVerification";

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
                path: '/verification/:regNo',
                element: <TicketVerification></TicketVerification>
            }
        ]
    }
])

export default router;