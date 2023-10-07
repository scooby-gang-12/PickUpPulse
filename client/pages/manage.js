import React from "react";
import styled from 'styled-components';

import GameForm from '../components/forms/GameForm'
import GamesList from "../components/gamesList/GamesList";

export default function Manage() {
    return (
        <>
        <h1>Manage</h1>
        <GameForm />
        <GamesList />
        </>
    )
}