// currently not in use

import React from "react";
import styled from 'styled-components';

import GameForm from '../components/forms/GameForm'
import GamesList from "../components/gamesList/GamesList";

export default function Manage() {
    return (
        <div>
            <h1>Manage</h1>
            <GameForm />
            <GamesList />
        </div>
    )
}