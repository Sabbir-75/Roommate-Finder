import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='bg-base-100'>
            <ToastContainer />
                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-353px)]'>
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
        </div>
    );
};

export default Root;