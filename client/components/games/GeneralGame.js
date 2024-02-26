import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { StyledButton } from '../styles/Dashboard.styled';
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
    // console.log('Attend', game._id)
    dispatch(attendGame(game._id))
  }

  return (
    <div className="general-game" style={{border: '1px solid black', borderRadius: '10px', marginBottom:'2px'}}>
      {flag &&  <div style={{float: 'right', marginRight: '5px', marginTop: '5px'}}>✔️</div>}
      <Link to={`/gameinfo/${game._id}`} style={{color: 'rgb(95,173,238)'}}>{game.gameName}</Link>
      <p style={{color: '#FF6463'}}>{game.address}</p>
      <p>
      Sport: {game.sport}
    </p>
      <p><strong>{days[date.getDay()]} @ {`${hour}:${minute}`} </strong></p>
      <div className="details-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <div className="skill-level" style={{ border: '2px solid black', borderRadius: '10px', padding: '5px', marginRight: '5px', backgroundColor: '#e5e5e5'}}>
          Skill Level: {game.skillLevel}
        </div>
        <div className="game-type" style={{ border: '2px solid black', borderRadius: '10px', padding: '5px', backgroundColor: '#e5e5e5'
       }}>
          Game Type: {game.gameType}
        </div>
      </div>
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
