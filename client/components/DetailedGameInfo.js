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

  const {sport, address, partySize, gameName} = game
  console.log(game)
  return (
    <StyledGameInfo>
      <div>
        <p>{gameName}</p>
        <p>{sport}</p>
        <p>{address}</p>
        <p>{partySize}</p>
      </div>
    </StyledGameInfo>
   
  )
}