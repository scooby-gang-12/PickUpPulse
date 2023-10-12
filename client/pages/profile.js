import React from "react";
import styled from 'styled-components';

import {useSelector} from 'react-redux'

export default function Profile() {
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo)
    return (
        <Container>
            <h1>Welcome</h1>
            <h3>Bobby</h3>
            <GamesDisplay>
                <DisplayItem>
                    <h3>Attending</h3>
                    <NumDisplay>5</NumDisplay>
                </DisplayItem>
                <DisplayItem>
                    <h3>Hosted</h3>
                    <NumDisplay>5</NumDisplay>
                </DisplayItem>
            </GamesDisplay>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    font-family: var(--primary-font);

    
`

const GamesDisplay = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    h3 {
        font-size: 4rem;
        justify-content: center;
    }
` 
const NumDisplay = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
    font-family: var(--tertiary-font);
    margin-top: -2rem;
    padding: 0;
`

const DisplayItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    padding: .5rem;
    width: 400px;
`