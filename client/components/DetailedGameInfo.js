import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import  styled  from "styled-components";
import {StyledButton} from './styles/Dashboard.styled'


import { StyledGameInfo } from "./styles/StyledGameInfo.styled";
import xImg from '../assets/X.png'
import golfImg from '../assets/golf.png'
import bBallImg from '../assets/basketball.png'

// import bounceBall from '../assets/BouncingBasketballGif.gif'

export default function DetailedGameInfo() {
  
  const { gameId } = useParams();

  const [attendingPlayers, setAttendingPlayers] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);

  const game = (useSelector((state)=>{
    return state.games.gamesArr.find((g)=>g._id === gameId)
  }))

   const handleUnattend = async () => {
    try {
      await dispatch(unattendGame(game._id));
      // history.goBack();
    } catch (error) {
      console.error("Error unattending game:", error);
    }
  };
  
  //because of current dataModel set up, I created a new route that parses a user _id's from game state to their usernames
  useEffect(() => {
    const getIdParser = async () => {
      try {
        const response = await axios.get("/api/users/idParser");
        const idParser = response.data;
        // console.log("game: ", game)
        // console.log("idParser: ", idParser)
        const players = game.attending.map((attendingId) => {
          const matchingPlayer = idParser.find((player) => player.id === attendingId);
          return {
            id: matchingPlayer.id,
            username: matchingPlayer.username,
          };
        });
        setAttendingPlayers(players)  
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching ID parser data:", error);
      }
    };

    getIdParser();
  }, []);

  const flag = userInfo?.attendingGames.some((attendingGame)=>attendingGame._id === game._id)


  const date = new Date(game.dateTime)
  const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
  const hour = date.getHours();
  const minute = date.getMinutes() === 0 ? '00' : date.getMinutes();
  const month = months[date.getMonth()]
  const dayDate = date.getDate()
  const year = date.getFullYear()
  const {sport, address, partySize, gameName} = game
  const [street, city, state, country] = address.split(', ')
  const selIcon = xImg

  return (
    <div>
    <StyledHeader>
        <MovingHeader>{gameName}</MovingHeader>
    </StyledHeader>
    <Container>
        <GameName $text={gameName}>{gameName}
        </GameName>
        <DetailsSection>
          <AddressSection>
            <h4>{street}, {city}</h4>
            <h4>{month} {dayDate}, {year} </h4>
            <h4>{days[date.getDay()]} @ {`${hour}:${minute}`} </h4>
          </AddressSection>
          <ProgressSection $partySize={partySize}>
            {Array.from({length: partySize}, (el,index)=>{
              return <div>{index < game.attending.length ? 
                <ColoredIcon src={selIcon} /> 
                : <GreyedIcon src={selIcon} />
                }
                </div>
            })}
          </ProgressSection>
          <p>Players:</p>
            <ul>
              {attendingPlayers.map((player) => (
                <li key={player.id}>
                  <Link>{player.username}</Link>
                </li>
              ))}
            </ul>        
          </DetailsSection>
        {!flag ? <StyledButton>Attend</StyledButton> : (
        <div>
          <h4>You are attending</h4>
          <StyledButton onClick={handleUnattend}>Unattend</StyledButton>
        </div>
      )}
    </Container>
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
color: black;
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
  background-color: white;
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

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    gap: 3rem;
  `

  const Graphic = styled.img`
    height: 5rem;
  `

  const GameName = styled.h1`
    font-family: var(--primary-font);
    font-size: ${({$text}) => $text.length > 20 ? '3rem' : '5rem'};

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
const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
`
const AddressSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProgressSection = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: ${({ $partySize }) => `repeat(${$partySize}, 1fr)`};

`
const ColoredIcon  = styled.img`
  height: 3rem;
`

const GreyedIcon  = styled.img`
  height: 3rem;
  filter: grayscale(100%);
  opacity: .5;
`

const Progress = styled.div`
  width: 300px;
  height: 10px;
  background: black;
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