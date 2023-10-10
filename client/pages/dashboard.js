import React, {useEffect} from "react";
import styled from 'styled-components';

import { useDispatch,useSelector } from "react-redux";

import {getAllGames} from '../features/games/gamesSlice'

import Map from '../components/map/Map'
export default function Dashboard() {
    const {userInfo} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllGames())
    },[])
    console.log(userInfo)
    const {gamesArr} = useSelector((state)=>state.games)
    return (
        <div>
            <h1>Dashboard</h1>
            <StyledP>Testing cabin font</StyledP>
            <p>Welcome {userInfo && userInfo.username}</p>
            <div>
            // ALL GAMES
            {gamesArr && gamesArr.map((game)=><p>{game.gameName}</p>)}
            // ATTENDING GAMES
            {userInfo && userInfo.attendingGames.map((game)=><p>{game}</p>)}
            </div>
            // MAP
            <div>
            <Map gamesArr={gamesArr} />
            </div>
        </div>
    )
}

const StyledP = styled.p`
    font-family: var(--secondary-font);
`