import React from 'react'
import { useDispatch } from 'react-redux'

import {deleteGame} from '../../features/games/gamesSlice'
export default function GamesListItem ({game, handleEdit}) {

  const {gameName, address, sport, dateTime, location, _id: id} = game
  const [lat, lng] = location.coordinates
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteGame(id))

  }
  return (
    <>
      <p >{gameName} : {address} : {sport} : {dateTime} : {lat} : {lng}</p>
      <button onClick={()=>handleEdit(game)}>Edit</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </>
  )
}