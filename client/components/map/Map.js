import React, {useEffect, useState ,useRef} from 'react';
import styled from 'styled-components';
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
      sport: game.sport,
      id: game._id
    }));
  };
  
  const navigate = useNavigate();
  const allMarkers = useRef([]);
  const mapRef = useRef(null);
  const googleMapRef = useRef(null)
  const dispatch = useDispatch()
  const initializeMap = async (center) => {
    if (window.google) {
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 13,
        styles: [
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "hue": "#008eff"
                  },
                  {
                      "invert_lightness": true
                  },
                  {
                      "lightness": "-64"
                  }
              ]
          },
          {
              "featureType": "administrative.country",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "administrative.country",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": "-70"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "hue": "#ff0000"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "hue": "#008bff"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "lightness": "30"
                  },
                  {
                      "gamma": "1.00"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.government",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.place_of_worship",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "hue": "#ff0000"
                  },
                  {
                      "lightness": "-10"
                  },
                  {
                      "saturation": "100"
                  },
                  {
                      "gamma": "1"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "hue": "#008eff"
                  },
                  {
                      "saturation": "0"
                  },
                  {
                      "lightness": "0"
                  },
                  {
                      "gamma": "1"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway.controlled_access",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway.controlled_access",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "lightness": "-15"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "transit.station",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit.station.airport",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit.station.bus",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit.station.rail",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "hue": "#008eff"
                  },
                  {
                      "saturation": "-69"
                  },
                  {
                      "lightness": "-27"
                  }
              ]
          }
      ]
      });
    }
    
  }

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
          navigate(`/gameinfo/${marker.id}`)
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
    console.log('get Map')
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
  <Styled>
    <h1>Map</h1>
    <StyledMap id='map' ref={mapRef} style={{ width: "400px", height: "400px" }}></StyledMap>
    <input
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={(e)=>setRange(e.target.value)}
        />
    <StyledSearchBtn onClick={()=>getNearbyGames(range)}>Search Radius: {range} miles</StyledSearchBtn>
    <div>
      <StyledSearchBtn onClick={()=>dispatch(getAllGames())}>Get Games</StyledSearchBtn>
    </div>

    <div>
      <StyledMapFilter onClick={()=>toggle('basketball')}>Basketball</StyledMapFilter>
      <StyledMapFilter onClick={()=>toggle('golf')}>Golf</StyledMapFilter>
      <StyledMapFilter onClick={()=>toggle('all')}>All</StyledMapFilter>
    </div>
    
    
    {/* <button onClick={()=>clearMarkers()}>Delete GAMES FROM MAP</button> */}
    
    {/* Get nearby can take a mileage distance */}
    
  </Styled>
  )
}


const Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
` 

const StyledMap = styled.div`
    border-radius: 20px;
    margin: 10px 0;
`
const StyledMapFilter = styled.button`
    background-color: rgb(95,173,238);
    margin: 12px 2px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transform: scale(0.98)
    }
`

const StyledSearchBtn = styled.button`
    background-color: #FFAEAF;
    border-radius: 10px;
    cursor: pointer;
    margin: 2px;

    &:hover {
        opacity: 0.8;
        transform: scale(0.98)
    }
`