import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './header/index';
import Footer from './footer/index';

export default function Layout() {
    return (
        <LayoutWrapper>
            <Header />
            <Outlet />
            <Footer />
        </LayoutWrapper>
    )

}

const LayoutWrapper = styled.div `
    height: 100vh;
    width: 100%;
    /* display: grid; */
    /* grid-template-rows: 10% 80% 10%; */
    /* grid-template-columns: auto; */
`