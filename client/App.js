import React from 'react';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

// import Login from './pages/login';
import Register from './components/register';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Profile from './pages/profile';
import Layout from './components/layout/index.js';
import CreateGames from './pages/createGames';
import AttendingGames from './pages/attendingGames';
import EditGames from './pages/editGame';
import HostedGames from './pages/hostedGames';
import EditGameForm from './components/forms/EditGameForm';

// store colors and global theme items
const theme = {
  colors: {
    formBackground: '#cccccc',
    header: '#14213d',
    footer: '#14213d',
    button: '#14213d',
    lightText: '#ffffff',
    loginForm: '#e5e5e5'

    // #000000, #14213d, fca311, e5e5e5, ffffff
  }
  
}

export default function App() {

  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/register' element={<Register/>}/>
              <Route path='/' element={<Login />} />  
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/manage' element={<Manage/>} />
                <Route path='/creategames' element={<CreateGames />} />
                <Route path='/attendinggames' element={<AttendingGames />} />
                <Route path='/hostedgames' element={<HostedGames />} />
                <Route path='/hostedgames/edit/:gameId' element={<EditGameForm />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}