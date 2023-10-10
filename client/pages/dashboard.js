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

    const {gamesArr} = useSelector((state)=>state.games)
    return (
        <div>
            <h1>Dashboard</h1>
            <StyledP>Testing cabin font</StyledP>
            <p>Welcome {userInfo && userInfo.username}</p>
            <Map gamesArr={gamesArr} />

        </div>
    )
}

const StyledP = styled.p`
    font-family: var(--secondary-font);
`