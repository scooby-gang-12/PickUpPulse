import React, {useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import  styled  from "styled-components";
import {StyledButton} from './styles/Dashboard.styled'


import { StyledGameInfo } from "./styles/StyledGameInfo.styled";
import golfImg from '../assets/golf.png'
import bBallImg from '../assets/basketball.png'

// import bounceBall from '../assets/BouncingBasketballGif.gif'

export default function DetailedGameInfo() {
  const { gameId } = useParams(); // Access the 'gameId' parameter
  

  const game = (useSelector((state)=>{
    return state.games.gamesArr.find((g)=>g._id === gameId)
  }))
  const {userInfo} = useSelector((state)=>state.auth)
  const flag = userInfo?.attendingGames.some((attendingGame)=>attendingGame._id === game._id)
//   const game = {
//     "location": {
//         "type": "Point",
//         "coordinates": [
//             -118.1435,
//             34.0217
//         ]
//     },
//     "_id": "6524a6c7eb03453d019f6860",
//     "gameName": "Basketball at LA Court",
//     "sport": "basketball",
//     "address": "456 Basketball St, Los Angeles, CA, USA",
//     "host": "60d5ec9af682fbd39c2d17b1",
//     "partySize": 10,
//     "dateTime": "2023-12-12T16:30:00.000Z",
//     "attending": [
//         "60d5ec9af682fbd39c2d17b1",
//         "60d5ec9af682fbd39c2d17b2",
//         "60d5ec9af682fbd39c2d17b3"
//     ],
//     "__v": 0
// }

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
  const selIcon = sport === 'basketball' ? bBallImg : golfImg 
  // console.log(game)
  return (
    <div>
    <StyledHeader>
        <MovingHeader>{gameName}</MovingHeader>
    </StyledHeader>
    <Container>
        <GameName $text={gameName}>{gameName}<span>
        <Graphic src={selIcon} alt="" />
          </span>
        </GameName>
        <DetailsSection>
          <AddressSection>
            <h4>{street}, {city}</h4>
            <h4>{month}, {dayDate}, {year} </h4>
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
          {/* <article>
  
            <h5>Signups</h5>
            <h3>{game.attending.length}</h3>
          </article>
          <article>
            <h5>Spots</h5>
            <h3>{partySize}</h3>
          </article> */}
          </ProgressSection>
        </DetailsSection>
        {!flag ? <StyledButton>Attend</StyledButton> : <h4>You are attending</h4>}
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