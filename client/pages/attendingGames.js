import React from "react";
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux'

import AttendedGame from '../components/games/AttendedGame'

export default function HostedGames() {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo)
    return (
        <div>
            <h1>Attending Games</h1>
            {userInfo && userInfo.attendingGames.map((game)=><AttendedGame game={game} />)}
        </div>
    )
}