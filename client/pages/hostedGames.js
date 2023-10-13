import React, {useEffect} from "react";
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux'
import HostedGame from '../components/games/HostedGame'

export default function HostedGames() {
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo)
    return (
        <div style= {{display: 'grid', justifyItems: 'center'}}>
            <h1 style={{display: 'grid', justifyContent: 'center', fontFamily: 'var(--primary-font)'}}>Hosted Games</h1>
            {userInfo && userInfo.hostedGames.map((game)=><HostedGame game={game} />)}
        </div>
    )
}