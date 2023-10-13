import React from 'react';
import { useDispatch } from 'react-redux';
import {attendGame, unattendGame} from '../../features/auth/authSlice'
import { StyledButton, InverseStyledButton } from '../styles/Dashboard.styled';

export default function AttendedGame ({game}) {
  const date = new Date(game.dateTime)
  const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const hour = date.getHours();
  const minute = date.getMinutes() === 0 ? '00' : date.getMinutes();

  const dispatch = useDispatch();

  const handleAttend =() => {
    console.log('Attend', game._id)
    dispatch(attendGame(game._id))
  }

  const handleUnattend = () => {
    dispatch(unattendGame(game._id))
    // console.log('Unattend', game._id)
  }
  return (
    <div style={{border: '1px solid black', borderRadius: '10px', marginBottom: '2px'}}>
      {/* <h5>Attending Game</h5> */}
      <p style={{color: 'rgb(95,173,238)'}}>{game.gameName}</p>
      <p style={{color: '#FF6463'}}>{game.address}</p>
      <p><strong>{days[date.getDay()]} @ {`${hour}:${minute}`}</strong> </p>
      {/* <button onClick={handleAttend}>Attend</button> */}
      <InverseStyledButton onClick={handleUnattend}>
        <span>Unattend</span>
        </InverseStyledButton>
    </div>
    )
}
