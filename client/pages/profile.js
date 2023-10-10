import React from "react";
import styled from 'styled-components';

import {useSelector} from 'react-redux'

export default function Profile() {
    const {userInfo} = useSelector(state=>state.auth)
    return (
        <div>
            <h1>Profile</h1>
            {userInfo && (
                <>
                <p>{userInfo.username}</p>
                <p>{userInfo.fullName}</p>
                <h5>Attending</h5>
                {userInfo.attendingGames.map((game)=><p>{game.gameName}</p>)}
                <h5>Hosted</h5>
                {userInfo.hostedGames.map((game)=><p>{game.gameName}</p>)}
                </>
            )}

        </div>
    )
}