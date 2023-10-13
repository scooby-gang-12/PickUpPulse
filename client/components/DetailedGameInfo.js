import React, {useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";


import { StyledGameInfo } from "./styles/StyledGameInfo.styled";


export default function DetailedGameInfo() {
  const { gameId } = useParams(); // Access the 'gameId' parameter
  console.log(gameId);

  const game = (useSelector((state)=>{
    return state.games.gamesArr.find((g)=>g._id === gameId)
  }))

  const {sport, address, partySize, gameName} = game;
  console.log(game)
  return (
    <div>
    <StyledHeader>
        <MovingHeader>Test</MovingHeader>
    </StyledHeader>
    <StyledGameInfo>
     
      

        
        
    </StyledGameInfo>
    </div>
  )
}

const MovingHeader = styled.div`
position: relative;
font-color: white;
font-family: var(--primary-font);
font-size: xxx-large;
display: flex;
top: 50%;
left: 100px;
width: auto;
min-height: 100%;
justify-content: center;
align-items: center;
color: #ffffff;
line-height: 50px;
animation: moveAndBlink 5s linear infinite;
z-index: 0;

@keyframes moveAndBlink {
  0% {
      left: -10%;
      opacity: .75;
  }
  25% {
    left: 20%;
    opacity: 1;
    
  }
  50% {
    left: 50%;
    opacity: .75
  }
  75% {
    left: 80%;
    opacity: 1;
  }
  100% {
    left: 110%;
    opacity: .75;
  }
}
`

const StyledHeader = styled.header`
  background-color: blue;
  display: flex;
  align-items: top;
  font-size: 100%;
  min-height: 100px;
`


const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ccc;
  border-radius: 5px;
  margin-top: 10px;`