import React, {useEffect} from "react";
import styled from 'styled-components';

import { useDispatch,useSelector } from "react-redux";

import {getAllGames} from '../features/games/gamesSlice'

import Map from '../components/map/Map';

import GeneralGame from '../components/games/GeneralGame'

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
            <Container>
                <div>
                    {gamesArr && gamesArr.map((game)=><GeneralGame game={game} />)}
                </div>
                <div>
                    <Map gamesArr={gamesArr} />
                </div>
            </Container>
        </div>
    )
}

const StyledP = styled.p`
    font-family: var(--secondary-font);
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`