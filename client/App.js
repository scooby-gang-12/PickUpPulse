import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Profile from './pages/profile';
import Navbar from './components/layout/header/navigation';
import Layout from './components/layout/index.js';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              {/* <Route index path='/' element={<Login />} /> */}
              <Route index path='/' element={<Register />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/manage' element={<Manage/>} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}