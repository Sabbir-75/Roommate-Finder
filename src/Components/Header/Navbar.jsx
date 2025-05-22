import React, { use } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/Green_Minimalist_Home_Logo___2_-removebg-preview.png"
import "./Navbar.css"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Bounce, toast } from 'react-toastify';

const Navbar = () => {
    const { userData, logout } = use(AuthContext)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const nav = <>
        <li className='myclass hover:text-[#DC143C] duration-400'><NavLink to={"/"}>Home</NavLink></li>
        <li className='myclass hover:text-[#DC143C] duration-400'><NavLink to={"/findoommate"}>Find Roommate</NavLink></li>
        <li className='myclass hover:text-[#DC143C] duration-400'><NavLink to={"/browselisting"}>Browse Listing</NavLink></li>
        <li className='myclass hover:text-[#DC143C] duration-400'><NavLink to={"/mylisting"}>My Listings</NavLink></li>
    </>

    const logoutHandler = () => {
        logout()
            .then(() => {
                toast.success('🦄 Login Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
                navigate("/")
            })
            .catch(error => {
                toast.error(`${error.code}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <div className='max-w-[150px]'>
                    <img src={logo} alt={logo} />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-base font-medium flex gap-7 px-1">
                    {nav}
                </ul>
            </div>
            <div className="mynewclass flex items-center navbar-end">
                <div className='relative flex w-[70px] h-[70px] group items-center'>
                    {
                        userData ? <img className='w-[35px] h-[35px] flex items-center rounded-full object-cover' src={userData?.photoURL} /> : <CgProfile size={35} color='#DC143C' />
                    }
                    {
                        userData && <div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-[#DC143C] text-[12px] font-normal">{userData?.displayName}</p>
                        </div>
                    }
                </div>
                {
                    userData ? <button onClick={logoutHandler} className={`rounded-md flex justify-center items-center px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-[#DC143C] border-[#DC143C]`}>
                        <span className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                        <span className={`relative text-[#FFFFFF]`}>Logout</span>
                    </button> : <>
                        <button onClick={() => navigate("login")} className={`rounded-md flex justify-center items-center px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium ${(pathname === "/login") && "bg-[#DC143C]"} border-[#DC143C]`}>
                            <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className={`relative text-[#DC143C] transition duration-300 ${(pathname === "/login") && "text-white"} group-hover:text-white ease`}>Login</span>
                        </button>
                        <button onClick={() => navigate("signup")} className={`rounded-md flex justify-center items-center px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium  ${(pathname === "/signup") && "bg-[#DC143C]"} border-[#DC143C]`}>
                            <span className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                            <span className={`relative text-[#DC143C] transition duration-300 ${(pathname === "/signup") && "text-white"} group-hover:text-white ease`}>Signup</span>
                        </button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;