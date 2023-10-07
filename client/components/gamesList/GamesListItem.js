import React from 'react'
export default function GamesListItem ({game, handleEdit}) {

  const {gameName, address, sport, dateTime, location} = game
  const [lat, lng] = location.coordinates
  
  return (
    <>
      <p >{gameName} : {address} : {sport} : {dateTime} : {lat} : {lng}</p>
      <button onClick={()=>handleEdit(game)}>Edit</button>
    </>
  )
}