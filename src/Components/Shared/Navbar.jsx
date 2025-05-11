import { Link, NavLink } from 'react-router';
import MediTicketLogo from '../../assets/MediTicket.png';
import { IoMdMailUnread } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const Navbar = () => {
    return (
        <div>
            <div className='bg-amber-500 p-2 flex justify-center gap-5'>
                <p className='flex items-center gap-0.5'><IoMdMailUnread className='mt-0.5' /> mediticket@gmail.com</p>
                <p className='flex items-center gap-0.5'><MdCall /> 01610243377</p>
                <p className='flex items-center gap-0.5'><IoLocation /> Chattogram, Bangladesh</p>
            </div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink>Ticket</NavLink></li>
                            <li><NavLink>Stats</NavLink></li>
                            <li><NavLink>Doctors</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="text-xl">
                        <img src={MediTicketLogo} alt="MediTicketLogo" className='w-42' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Ticket</NavLink></li>
                        <li><NavLink to='/stats'>Stats</NavLink></li>
                        <li><NavLink to='/doctors'>Doctors</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;