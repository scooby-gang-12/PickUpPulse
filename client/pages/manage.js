<<<<<<< HEAD
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
=======
// currently not in use

import React from "react";
>>>>>>> JC/StyledLogin
import styled from 'styled-components';

import GameForm from '../components/forms/GameForm'
import GamesList from "../components/gamesList/GamesList";
import Map from '../components/map/Map'
import { getAllGames } from "../features/games/gamesSlice";


export default function Manage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllGames())
    },[])

    const {gamesArr} = useSelector((state)=>state.games)
    
    return (
        <>
        <h1>Manage</h1>
        <GameForm />
        <Map gamesArr={gamesArr}/>
        <GamesList />
        </>
    )
}