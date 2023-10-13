import React, {useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import { StyledGameInfo } from "./styles/StyledGameInfo.styled";


export default function DetailedGameInfo() {
  const { gameId } = useParams(); // Access the 'gameId' parameter
  console.log(gameId);

  const game = (useSelector((state)=>{
    return state.games.gamesArr.find((g)=>g._id === gameId)
  }))

  // const {sport, address, partySize, gameName} = game
  // console.log(game)
  return (
    <StyledGameInfo>
        <h1>Bobbys Bubbles</h1>
        <h3>Golf</h3>
        <h3>12212 Sports Park</h3>
        <h3>5 spots </h3>
        <h3>5 signUp</h3>
    </StyledGameInfo>
  )
}