import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/index';
import Footer from './footer/index';

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

}