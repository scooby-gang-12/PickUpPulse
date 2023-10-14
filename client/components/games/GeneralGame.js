import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../styles/Dashboard.styled';
import BBALLIMG from '../../assets/basketball.png'
import GOLFIMG from '../../assets/golf.png'


import {attendGame, unattendGame} from '../../features/auth/authSlice'

export default function GeneralGame ({game}) {
  const date = new Date(game.dateTime)
  const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const hour = date.getHours();
  const minute = date.getMinutes() === 0 ? '00' : date.getMinutes();

  const dispatch = useDispatch();
  const {userInfo} = useSelector(state=>state.auth)

  const flag = userInfo?.attendingGames.some((attendingGame)=>attendingGame._id === game._id)
  const handleAttend =() => {
    console.log('Attend', game._id)
    dispatch(attendGame(game._id))
  }

  const handleUnattend = () => {
    console.log('Unattend', game._id)
  }

  console.log(game)
  return (
    <div style={{border: '1px solid black', borderRadius: '10px', marginBottom:'2px'}}>
      {/* <h5>General Game</h5> */}
      {flag &&  <div style={{float: 'right', marginRight: '5px', marginTop: '5px'}}>✔️</div>}
      <Link to={`/gameinfo/${game._id}`} style={{color: 'rgb(95,173,238)'}}>{game.gameName}</Link>
      <p style={{color: '#FF6463'}}>{game.address}</p>
      <p>
      Sport:
      {game.sport === 'basketball' ? <img src={BBALLIMG} height='24px' width='24px'></img>: <img src={GOLFIMG} height='20px' width='20px'></img>}
    </p>
      <p><strong>{days[date.getDay()]} @ {`${hour}:${minute}`} </strong></p>
      {!flag &&
      <StyledButton onClick={handleAttend}>
        <span>Attend</span>
      </StyledButton>
        }
      {/* <button onClick={handleAttend}>Attend</button> */}
      {/* <button onClick={handleUnattend}>Unattend</button> */}

    </div>
    )
}