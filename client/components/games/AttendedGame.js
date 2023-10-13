import React from 'react';

import { useDispatch } from 'react-redux';

import {attendGame, unattendGame} from '../../features/auth/authSlice'

export default function GeneralGame ({game}) {
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
    <div>
      <h5>Attending Game</h5>
      <p>{game.gameName}</p>
      <p>{game.address}</p>
      <p>{days[date.getDay()]} @ {`${hour}:${minute}`} </p>
      {/* <button onClick={handleAttend}>Attend</button> */}
      <button onClick={handleUnattend}>Unattend</button>
    </div>
    )
}
