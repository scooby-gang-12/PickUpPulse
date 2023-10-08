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
    height: 100%;
    width: 100%;
`