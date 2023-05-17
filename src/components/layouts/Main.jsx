import React from 'react';
import Header from '../Pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Main;