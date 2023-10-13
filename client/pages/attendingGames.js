import React from "react";
import styled from 'styled-components';


import {useDispatch, useSelector} from 'react-redux'

import AttendedGame from '../components/games/AttendedGame'

const dummy = {"_id":{"$oid":"60d5ec9af682fbd39c2d17b0"},"username":"janeSmith","password":"$2b$10$U1h6hhAS61JEmSMaxEFFpObYt4oSCd8EJCElAkdvHjTG661JoWg0.","fullName":"Jane Smith","favoriteSports":["golf"],"location":{"type":"Point","coordinates":[{"$numberDouble":"-118.2637"},{"$numberDouble":"34.0722"}]},"attendingGames":[{"$oid":"6526b39a83cc874b647c5788"},{"$oid":"6526b39d83cc874b647c57d0"}],"hostedGames":[],"__v":{"$numberInt":"2"}}

export default function HostedGames() {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo)
    return (
    <Body>
        <Header>Attending Games</Header>
        <Container>
            {userInfo && userInfo.attendingGames.map((game)=><GameCard><AttendedGame game={game} /></GameCard>)}
        </Container>
    </Body> 
    )
}

const Container = styled.div`
    justify-content: center;
    text-align: center;
    overflow-y: scroll;
    width: 900px;
    max-height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const GameCard = styled.div`
    display: grid;

    justify-content: center;
    // border: solid;
    // border-width: 2px;
    padding: 5px;
    margin: 2px;
    // border-radius: 10px
`

const Body = styled.div`
    display: grid;
    justify-content: center;
`

const Header = styled.h1`
    max-height: 15px;
    display: flex;
    justify-content: center;
`