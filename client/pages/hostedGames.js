import React, {useEffect} from "react";
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux'
import HostedGame from '../components/games/HostedGame'

export default function HostedGames() {
    const {userInfo} = useSelector(state=>state.auth)
    return (
        <div>
            <h1>Hosted Games</h1>
            {userInfo && userInfo.hostedGames.map((game)=><HostedGame game={game} />)}
        </div>
    )
}