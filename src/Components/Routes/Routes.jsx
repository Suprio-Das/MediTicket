import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import TicketVerification from "../TicketVerification/TicketVerification";
import Stats from "../Stats/Stats";

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
                path: '/stats',
                element: <PrivateRoutes>
                    <Stats></Stats>
                </PrivateRoutes>
            },
            {
                path: '/doctors',
                element: <PrivateRoutes>
                    <h1>This is doctors route.</h1>
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