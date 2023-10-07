import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import GameForm from '../components/forms/GameForm'
import GamesList from "../components/gamesList/GamesList";

import { getAllGames } from "../features/games/gamesSlice";


export default function Manage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllGames())
    },[])
    return (
        <>
        <h1>Manage</h1>
        <GameForm />
        <GamesList />
        </>
    )
}