import React, {useEffect, useState ,useRef} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "@googlemaps/js-api-loader"
import { useNavigate } from "react-router-dom";
import {getAllGames, getGamesNearMe} from '../../features/games/gamesSlice'

import { StyledForm } from '../styles/StyledForm.styled';
import { StyledButton } from '../styles/Button.styled';
import { StyledInput } from '../styles/StyledInput.styled';


import golfImg from '../../assets/golf.png'
import bBallImg from '../../assets/basketball.png'
import gameIcon from '../../assets/gameIcon.png'

export default function Map () {

//gamesArr is the master state that will be manipulated through filtering. This gets fetched once Map component is rendered
  const {gamesArr} = useSelector((state)=>state.games)

  const uniqueSports = [...new Set(gamesArr.map((game) => game.sport))];
  
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
  const [manualLoc, manuallySetLoc] = useState({ lat: 37.7749, lng: -122.4194 });
  const getCurrentLocation = async () => {
    // const defaultLocation = { lat: 37.7749, lng: -122.4194 };
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
            resolve(manualLoc);
          }
        );
      } else {
        resolve(manualLoc);
      }
    });
  };
  

    const updateMarkers = (selectedSport) => {
        let filteredGames;
    
        if (selectedSport === 'all'){
            let allArr = gamesArr.map(game => ({
                lat: game.location.coordinates[1],
                lng: game.location.coordinates[0],
                gameName: game.gameName,
                sport: game.sport,
                id: game._id
            }))

            clearMarkers();
            createMarkers(allArr)
        } else {
            filteredGames = gamesArr.filter(game => game.sport === selectedSport);

            let filteredArr = filteredGames.map(game => ({
                lat: game.location.coordinates[1],
                lng: game.location.coordinates[0],
                gameName: game.gameName,
                sport: game.sport,
                id: game._id
            }))

      clearMarkers();
      createMarkers(filteredArr);

        }    
    }

    const clearMarkers = () => {
        for (const marker of allMarkers.current) {
            marker.setMap(null);
        }
        allMarkers.current = [];
        }

    const createMarkers = (markers) => {
        if (window.google && window.google.maps && window.google.maps.Marker) {
        for (const marker of markers) {
            const googleMarker = new window.google.maps.Marker({
            map: googleMapRef.current,
            position: marker,
            icon : {
                url: gameIcon,
                scaledSize: new window.google.maps.Size(30, 30)
            }
            })

        allMarkers.current.push(googleMarker);
        const infoContent = document.createElement('p')
        infoContent.textContent = marker.gameName;
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


  useEffect (() => {
    const loader = new Loader({
      apiKey: process.env.GMAPS_API_KEY,
      version: "weekly",
    });
    loader.importLibrary('places').then( async ()=>{
      const location = await getCurrentLocation()
      initializeMap(location)
      dispatch(getAllGames())
    })
  },[manualLoc])

  const resetGamesArr = async () => {

    dispatch(getAllGames());
    setActiveFilter('all')
    updateMarkers(activeFilter);

  }

  //getNearbyGames' dispatch returns a modified gamesArr of games within the search radius
  const getNearbyGames = async (radius = 5) => {
    const location = await getCurrentLocation()
    const locationQuery = {
      lat: location.lat,
      lng: location.lng,
      radius
    }
    setActiveFilter('all');
    dispatch(getGamesNearMe(locationQuery))
  }

  const [activeFilter,setActiveFilter] = useState('all');
  const [range, setRange] = useState(5)

  const toggle = (selFilter)=> {
    setActiveFilter(selFilter)
  }
  
  //updates the markers with the new active filter
  useEffect(() => {
    if (gamesArr.length >= 0) { 
        updateMarkers(activeFilter);
    }
  }, [gamesArr, activeFilter]);

  const autocompleteInputRef = useRef();
  const addressRef = useRef('10 Van Ness Ave, San Francisco, CA 94103');
  const latRef = useRef();
  const lngRef = useRef();
  let autocomplete;

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GMAPS_API_KEY,
      version: "weekly"
    });
    loader.importLibrary('places')
      .then(() => {
        autocomplete = new google.maps.places.Autocomplete(
          autocompleteInputRef.current,
          { types: ["address"] }
        );
        autocomplete.addListener('place_changed', onPlaceChanged);
      });
    const onPlaceChanged = () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        addressRef.current = place.formatted_address;
      }
      if (place.geometry) {
        latRef.current = place.geometry.location.lat();
        lngRef.current = place.geometry.location.lng();
      }
    }
  }, []);

  //mapping new click buttons based on each unique sport. const sportFilters is an array of StyledMapFilter components
  const sportFilters = uniqueSports.map((sport, index) => (
    <StyledMapFilter key={index} onClick={() => toggle(sport)}>
      {sport}
    </StyledMapFilter>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressRef.current) return alert('Please enter an address');
    manuallySetLoc({
      lat: latRef.current,
      lng: lngRef.current
    });
    document.getElementById('manLocForm').reset();
  }

  return (
  <Styled>
    <StyledForm id='manLocForm' onSubmit={handleSubmit}>
        <label htmlFor='locName'>Where do you want to play?</label>
        <StyledInput 
            type='text'
            name='locName'
            id='locName'
            ref={autocompleteInputRef}
        />
        <StyledButton type='submit'>Set Location</StyledButton>
    </StyledForm>
    <label htmlFor='map' style={{height: '1em', marginBottom: '-1.5em', paddingTop: '1em'}}>{addressRef.current}</label>
    <StyledMap id='map' ref={mapRef} style={{ width: "400px", height: "400px", marginTop: '56px' }}></StyledMap>
    <input
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={(e)=>setRange(e.target.value)}
        />
    <StyledSearchBtn onClick={()=>getNearbyGames(range)}>Search Radius: {range} miles</StyledSearchBtn>
    <div>
      <StyledSearchBtn onClick={resetGamesArr}>Get All Games</StyledSearchBtn>
    </div>

    <div className='map-filter-buttons'>
        {sportFilters}
    </div>
    

    
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