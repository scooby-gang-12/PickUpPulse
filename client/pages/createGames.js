import React from "react";
import styled from 'styled-components';
import { FormContainer } from '../components/styles/FormContainer.styled';

import GameForm from '../components/forms/GameForm'

export default function CreateGames() {

    return (
        <FormContainer>
            <GameForm />
        </FormContainer>
    )
}