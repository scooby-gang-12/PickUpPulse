import React, {useState} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import GamesListItem from './GamesListItem';
import EditGameForm from '../forms/EditGameForm';
export default function GamesList () {
  const [activeEdit, setActiveEdit] = useState(null)
  const {gamesArr} = useSelector((state)=>state.games)
  
  const handleEdit = (game) => {
    setActiveEdit(game)
  }
  const handleClose = () => {
    setActiveEdit(null)
  }
  return (
    <>
    <h1>Games</h1>
    {activeEdit && <EditGameForm game={activeEdit}  handleClose={handleClose}/>}
    {gamesArr.map((game, index) => <GamesListItem key={index} game={game} handleEdit={handleEdit}/>)}
    </>
  )
}