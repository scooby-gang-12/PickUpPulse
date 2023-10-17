import React, {useEffect} from "react";
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux'
import HostedGame from '../components/games/HostedGame'

export default function HostedGames() {
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo)
    return (
      <Body>
            <Header>Hosted Games</Header>
              <Container>
                {userInfo && userInfo.hostedGames.map((game)=>
                    <HostedGame game={game} />)}
              </Container>
      </Body>
    )
}

const Body = styled.div`
  display: grid; 
  grid-template-rows: auto 1fr; 
  justify-items: center;
`;

const Header = styled.h1`
  display: grid;
  justify-content: center;
  font-family: var(--primary-font); 
  height: auto;
  margin: 10px;
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  overflow-y: scroll;
  width: 900px;
  max-height: 600px;
`;

// const GameCard = styled.div`
//   display: grid;
//   margin: 10px;
//   background-color: rgb(240, 240, 240);
//   padding: 20px;
//   width: 75%;
//   height: auto;
//   box-shadow: 0 0 0 5px #5fadee;
//   outline: dashed 5px #ff6463;
//   border-radius: 30px;
//   justify-items: center;
//   text-align: center;

//   &.basketball {
//     background-image: url(${require('../assets/closeup-basketball.jpg')});
//     background-size: contain;
//   }
 
//   &.golf {
//     background-image: url(${require('../assets/closeup-golfball.jpg')});
//     background-size: contain;
//   }
// `;