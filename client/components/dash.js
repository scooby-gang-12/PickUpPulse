import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {getAllGames} from '../features/games/gamesSlice'
import GeneralGame from "./games/GeneralGame"
import AttendedGame from "./games/AttendedGame";
import Map from '../components/map/Map'
import { Link } from "react-router-dom";
import {StyledDashboard, StyledLeftSide, StyledAllGames, StyledRenderedGames} from "./styles/Dashboard.styled";


const AllGames = () => {
  const {userInfo} = useSelector((state) => state.auth);
  const {gamesArr} = useSelector((state)=>state.games)
  const dispatch = useDispatch();
  useEffect(()=> {
    if (gamesArr.length === 0) {
      dispatch(getAllGames())
    } 
  }, [])
  
  return (
    <StyledAllGames>
      <h1>All Games</h1>
      
      <StyledRenderedGames>
      {gamesArr && gamesArr.map((game, index) => <GeneralGame game={game}/>)}
      </StyledRenderedGames>
    </StyledAllGames>
  )
}

const AttendingGames = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <StyledAllGames>
      <h1>Attending Games</h1>
      <StyledRenderedGames>
      {userInfo && userInfo.attendingGames.map((game) => <AttendedGame game={game} key={game._id}/>)}
      </StyledRenderedGames>
      </StyledAllGames>
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
      {/* <StyledLeftSide> */}
        <AllGames/>
        <MapOnDash/>
        <AttendingGames/>
      {/* </StyledLeftSide> */}
      
    </StyledDashboard>
    
  )
}