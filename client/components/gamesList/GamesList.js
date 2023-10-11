import React, {useState} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import GamesListItem from './GamesListItem';
import EditGameForm from '../forms/EditGameForm';
import { useNavigate } from 'react-router-dom';
export default function GamesList () {
  const [activeEdit, setActiveEdit] = useState(null)
  const {gamesArr} = useSelector((state)=>state.games)


  const navigate = useNavigate()
  
  const handleEdit = (game) => {
    // setActiveEdit(null)
    // setActiveEdit(game)
    navigate(`/hostedgames/edit/${game._id}`)
  }
  const handleClose = () => {
    setActiveEdit(null)
  }
  return (
    <div>
    <h1>Games</h1>
    {activeEdit && <EditGameForm game={activeEdit}  handleClose={handleClose}/>}
    {gamesArr.map((game, index) => <GamesListItem key={index} game={game} handleEdit={handleEdit}/>)}
    </div>
  )
}