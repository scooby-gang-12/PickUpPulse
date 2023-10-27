import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {attendGame, unattendGame} from '../../features/auth/authSlice'
import { StyledButton, InverseStyledButton } from '../styles/Dashboard.styled';

export default function AttendedGame ({game}) {
  
  const {userInfo} = useSelector(state=>state.auth)
  const dispatch = useDispatch();

  const date = new Date(game.dateTime)
  const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const hour = date.getHours();
  const minute = date.getMinutes() === 0 ? '00' : date.getMinutes();

  // const flag = userInfo?.hostedGames.some((hostedGame)=>hostedGame._id === game._id)

  const flag = userInfo._id === game.host 


  const handleUnattend = () => {
    dispatch(unattendGame(game._id))
  }

  return (
    <div style={{border: '1px solid black', borderRadius: '10px', marginBottom: '2px'}}>
      {/* <h5>Attending Game</h5> */}
      <Link to={`/gameinfo/${game._id}`} style={{color: 'rgb(95,173,238)'}}>{game.gameName}</Link>
      <p style={{color: '#FF6463'}}>{game.address}</p>
      <p><strong>{days[date.getDay()]} @ {`${hour}:${minute}`}</strong> </p>
      {/* <button onClick={handleAttend}>Attend</button> */}
      {!flag ? <InverseStyledButton onClick={handleUnattend}>
        <span>Unattend</span>
        </InverseStyledButton> : <div>You be hosting this game 👑</div>}
    </div>
    )
}
