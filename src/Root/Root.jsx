import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto p-2'>
            <header>
                <nav>
                <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
                </main>
            <footer>Footer</footer>
        </div>
    );
};

export default Root;