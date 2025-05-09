import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <h1>This is children of root.</h1>
            }
        ]
    }
])

export default router;