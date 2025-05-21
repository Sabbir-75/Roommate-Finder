import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-white'>
            <div className=''>
                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-353px)]'>
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;