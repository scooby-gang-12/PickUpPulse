import React from 'react';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/GlobalStyles';

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
import  GameInfo from './pages/gameinfo';

// store colors and global theme items
const theme = {
  colors: {
    formBackground: '#cccccc',
    header: '#ffffff',
    footer: '#ffffff',
    button: '#14213d',
    lightText: '#ffffff',
    loginForm: '#e5e5e5'

    // #000000, #14213d, fca311, e5e5e5, ffffff
  },
  
}

export default function App() {

  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/register' element={<Register/>}/>
              <Route path='/' element={<Login />} />  
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/manage' element={<Manage/>} />
                <Route path='/creategames' element={<CreateGames />} />
                <Route path='/attendinggames' element={<AttendingGames />} />
                <Route path="/gameinfo/:gameId" element={<GameInfo/>} />
                <Route path='/hostedgames' element={<HostedGames />} />
                <Route path='/hostedgames/edit/:gameId' element={<EditGameForm />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}