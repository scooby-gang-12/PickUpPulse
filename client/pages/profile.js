import React from "react";
import styled from 'styled-components';

import {useSelector} from 'react-redux'

import UpdateProfile from "./updateProfile";


export default function Profile() {
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo)

//define button functionality here
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        fetch('/', {method: PATCH, body: formData});

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }



    return (
        <Container>
            <h1>Welcome</h1>
            {/* <h3>{userInfo.fullName}</h3> */}
            <PageDisplay>
            <UserInfoDisplay>
                <h3>{userInfo.fullName}'s Profile`</h3>
                    <UserProfile>
                        <UpdateProfile/>
                    </UserProfile>
            </UserInfoDisplay>
            <GamesDisplay>
                <DisplayItem>
                    <h3>Attending</h3>
                    <NumDisplay>{userInfo.attendingGames.length}</NumDisplay>
                </DisplayItem>
                <DisplayItem>
                    <h3>Hosted</h3>
                    <NumDisplay>{userInfo.hostedGames.length}</NumDisplay>
                </DisplayItem>
            </GamesDisplay>
            </PageDisplay>
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
const PageDisplay = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    h3 {
        font-size: 4rem;
        justify-content: center
    }
`
const UserInfoDisplay = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: start;
    border: 3px;
    gap: 2rem;
    h3 {
        font-size: 4rem;
        justify-content: center
    }
`

const UserProfile = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border: 3px;
    gap: 2rem;
    font-size: .80rem;
    font-family: var(--tertiary-font);
    margin-top: -2rem;
    padding: 0;
`


const GamesDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 2rem;
    h3 {
        font-size: 4rem;
        justify-content: center;
    }
` 
const NumDisplay = styled.div`
    display:flex;
    align-items: center;
    justify-content: right;
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