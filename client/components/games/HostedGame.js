import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {deleteGame} from '../../features/games/gamesSlice'
import {getUser} from '../../features/auth/authSlice'

export default function HostedGame ({game}) {
  const date = new Date(game.dateTime)
  const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const hour = date.getHours();
  const minute = date.getMinutes() === 0 ? '00' : date.getMinutes();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteGame(game._id)).then(()=>{
      dispatch(getUser())
    })
  }
  const handleEdit = (game) => {
    navigate(`/hostedgames/edit/${game._id}`)
  }

  
  return (
    <div>
      <p>{game.gameName}</p>
      <p>{game.address}</p>
      <p>{days[date.getDay()]} @ {`${hour}:${minute}`} </p>
      <button onClick={()=>handleEdit(game)}>Edit</button>
      <button onClick={()=>handleDelete()}>Delete</button>
    </div>
  )
}