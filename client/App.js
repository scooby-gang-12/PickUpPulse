import React from 'react';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

// import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Profile from './pages/profile';
import Navbar from './components/layout/header/navigation';
import Layout from './components/layout/index.js';

// store colors and global theme items
const theme = {
  colors: {
    // #000000, #14213d, fca311, e5e5e5, ffffff
  }
}

export default function App() {

  return (
    <ThemeProvider theme = {theme}>
      <>
        <BrowserRouter>
          <Routes>
                {/* <Route path='/' element={<Login />} />   */}
                {/* <Route  path='/' element={<Layout/>}> */}
              <Route path='/' element={<Layout />}>
                <Route index path='/' element={<Login />} />
                {/* <Route index path='/' element={<Register />} /> */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/manage' element={<Manage/>} />
                <Route path='/profile' element={<Profile />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  )
}