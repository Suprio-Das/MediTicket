import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;