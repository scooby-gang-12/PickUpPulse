import React, {useEffect, useState ,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "@googlemaps/js-api-loader"
import { useNavigate } from "react-router-dom";
import {getAllGames, getGamesNearMe} from '../../features/games/gamesSlice'

import golfImg from '../../assets/golf.png'
import bBallImg from '../../assets/basketball.png'
export default function Map () {
  const {gamesArr} = useSelector((state)=>state.games)

  const mapLocations = () => {
    let filteredGames = gamesArr;
  
    if (activeFilter === 'basketball') {
      filteredGames = gamesArr.filter(game => game.sport === 'basketball');
    } else if (activeFilter === 'golf') {
      filteredGames = gamesArr.filter(game => game.sport === 'golf');
    } // 'all' will use the original gamesArr
  
    return filteredGames.map(game => ({
      lat: game.location.coordinates[1],
      lng: game.location.coordinates[0],
      gameName: game.gameName,
      sport: game.sport
    }));
  };
  
  const allMarkers = useRef([]);
  const mapRef = useRef(null);
  const googleMapRef = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const getCurrentLocation = async () => {
    const defaultLocation = { lat: 37.7749, lng: -122.4194 };
    return new Promise((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            resolve({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            });
          },
          (error) => {
            console.error('Error retrieving location:', error);
            resolve(defaultLocation);
          }
        );
      } else {
        resolve(defaultLocation);
      }
    });
  };

  const initializeMap = async (center) => {
    if (window.google) {
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 13,
      });
    }
    
  }


  const updateMarkers = (markers = mapLocations()) => {
    clearMarkers()
    createMarkers(markers)
  }

  const createMarkers = (markers) => {
    if (window.google && window.google.maps && window.google.maps.Marker) {
      for (const marker of markers) {
        const googleMarker = new window.google.maps.Marker({
          map: googleMapRef.current,
          position: marker,
          icon : {
            url: marker.sport === 'basketball' ? bBallImg : golfImg,
            scaledSize: new window.google.maps.Size(25, 25)
          }
        })

        allMarkers.current.push(googleMarker);
        const infoContent = document.createElement('p')
        infoContent.textContent = marker.sport
        infoContent.addEventListener('click',()=>{
          navigate('/profile')
        })
        const infoWindow = new window.google.maps.InfoWindow({
          content: infoContent
        });
  
        googleMarker.addListener("click", () => {
          infoWindow.open(googleMapRef.current, googleMarker);
        });
      }
    }
  }

  const clearMarkers = () => {
    for (const marker of allMarkers.current) {
      marker.setMap(null);
    }
    allMarkers.current = [];

  }



  useEffect (() => {
    const loader = new Loader({
      apiKey: "AIzaSyAT5_1vYwxgEWt8wn_LKWDsVo0mOjqfxgs",
      version: "weekly",
    });
    loader.importLibrary('places').then( async ()=>{
      const location = await getCurrentLocation()
      initializeMap(location)
      dispatch(getAllGames())
    })
  },[])

  const getNearbyGames = async (radius = 5) => {
    const location = await getCurrentLocation()
    const locationQuery = {
      lat: location.lat,
      lng: location.lng,
      radius
    }
    dispatch(getGamesNearMe(locationQuery))
  }

  const [activeFilter,setActiveFilter] = useState('all');
  const [range, setRange] = useState(5)
  const toggle = (selFilter)=>{
    setActiveFilter(selFilter)
  }
  
  useEffect(() => {
    if (gamesArr.length > 0) { 
        updateMarkers();
    }
}, [gamesArr,activeFilter]);

  

  return (
  <div>
    <h1>Map</h1>
    <div>
      <button onClick={()=>toggle('basketball')}>Basketball</button>
      <button onClick={()=>toggle('golf')}>Golf</button>
      <button onClick={()=>toggle('all')}>All</button>
    </div>
    
    {/* <button onClick={()=>clearMarkers()}>Delete GAMES FROM MAP</button> */}
    <div>
      <button onClick={()=>dispatch(getAllGames())}>Get Games</button>
    </div>
    {/* Get nearby can take a mileage distance */}
    <input 
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={(e)=>setRange(e.target.value)}
        />
    <button onClick={()=>getNearbyGames(range)}>Get Games Near Me {range}</button>

    <div id='map' ref={mapRef} style={{ width: "400px", height: "400px" }}></div>
  </div>
  )
}