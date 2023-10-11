import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {getAllGames} from '../features/games/gamesSlice'
import Map from '../components/map/Map'
import {StyledDashboard, StyledLeftSide} from "./styles/Dashboard.styled";


const AllGames = () => {
  const {userInfo} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllGames())
  }, [])
  const {gamesArr} = useSelector((state)=> state.games)
  console.log(gamesArr)
  return (
    <div>
      <h1>All Games</h1>
      {gamesArr && gamesArr.map((game) => <div>{game.gameName}</div>)}
    </div>
  )
}

const AttendingGames = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <div>
      <h1>Attending Games</h1>
      {userInfo && userInfo.attendingGames.map((game) =><div>{game}</div>)}
    </div>
  )
}

const MapOnDash = () => {
  const {gamesArr} = useSelector((state) => state.games)
  return (
    <Map gamesArr={gamesArr}/>
  )
 
}



export default  function Dash() {
  return (
    <StyledDashboard>
      <StyledLeftSide>
        <AllGames/>
        <AttendingGames/>
      </StyledLeftSide>
      <MapOnDash/>
    </StyledDashboard>
    
  )
}