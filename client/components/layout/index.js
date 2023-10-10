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
    display: grid;
    min-height: 100vh;
    width: 100%;
    // background-color: linen;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        'header'
        'main'
        'footer';
`