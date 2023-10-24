import React, {useRef, useEffect, useState} from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { StyledGameForm } from '../styles/StyledGameForm.styled'
import { StyledButton } from "../styles/Button.styled"
import { StyledInput } from '../styles/StyledInput.styled'
import { StyledDropDown } from '../styles/StyledDropdown.styled.js'

import { addGame } from '../../features/games/gamesSlice'
import { createGame } from '../../features/games/gamesSlice'
import {getUser} from '../../features/auth/authSlice'
// import subtleGrayscale from '../../utils/mapStyles/subtleGrayscale'

export default function GameForm () {
  
  //these are what's accessing the DOM input elements
  const dateTimeRef = useRef(null);
  const autocompleteInputRef = useRef(null);
  const addressRef = useRef(null);
  const sportsRef = useRef(null);
  const skillLevelRef = useRef(null);
  const gameTypeRef = useRef(null)


  //****commenting these out to use a sportsRef instead****
  // const basketballRef = useRef(null)
  // const golfRef = useRef(null)

  const latRef = useRef(null)
  const lngRef = useRef(null)
  const partySizeRef = useRef(null);
  const gameNameRef = useRef(null);
  const mapRef = useRef(null);
  const googleMapRef = useRef(null)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [map, setMap] = useState(null);
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [gameType, setGameType] = useState('Casual');

  let autocomplete;

  const initializeMap = (center) => {
    googleMapRef.current = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
      // styles: subtleGrayscale
    })
    
  }

  useEffect(()=>{
    const loader = new Loader({
      apiKey: process.env.GMAPS_API_KEY,
      version: "weekly",
    });

    
    loader.importLibrary('places')
    .then(()=>{

      // Initialize Address Autocomplete
      autocomplete = new google.maps.places.Autocomplete(
        autocompleteInputRef.current,
        { types: ["address"] }
      );
      
      autocomplete.addListener("place_changed", onPlaceChanged);

      // Initialize Map  
      // let defaultLocation = { lat: 37.7749, lng: -122.4194 };
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position)=>{
      //     const userLocation = {
      //       lat: position.coords.latitude,
      //       lng: position.coords.longitude
      //     }
      //     initializeMap(userLocation)
      //   }, () => {
      //     initializeMap(defaultLocation)
      //   }) 
      // } else {
      //   initializeMap(defaultLocation)
      // }
      

    })

    const onPlaceChanged = () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        addressRef.current = place.formatted_address;
      }
      if (place.geometry) {
        latRef.current = place.geometry.location.lat();
        lngRef.current = place.geometry.location.lng();
      }
      // if (googleMapRef.current && place.geometry) {
      //   googleMapRef.current.setCenter(place.geometry.location);
      //   new window.google.maps.Marker({
      //     map: googleMapRef.current,
      //     position: place.geometry.location
      //   });
      // }

    };
  },[])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sportsRef);
    if (addressRef.current === null) {
      alert('must enter address')
      return
    }

    const formValues = {
      sport: sportsRef.current.value,
      location: {
        type: 'Point',
        coordinates: [lngRef.current, latRef.current]
      },
      address: addressRef.current,
      partySize: partySizeRef.current.value,
      dateTime: dateTimeRef.current.value,
      gameName: gameNameRef.current.value,
      skillLevel: skillLevel,
      gameType: gameType
    }
    console.log(formValues)
    // dispatch(addGame(formValues))
    dispatch(createGame(formValues)).then(() => {
      dispatch(getUser())
      .then(() => navigate('/dashboard'))
      
    })
    .catch(error => {
      console.error("There was an error deleting the game:", error);
      // Handle the error appropriately, maybe display a message to the user.
    });
  }
  return (
    <div>
    {/* <h1>Game Form</h1> */}
    <StyledGameForm onSubmit={handleSubmit}>
      <h1>Create A Game</h1>
      <label htmlFor='gameName'>Game Name</label>
      <label htmlFor='gameName'>HAM WATER</label>

      <StyledInput
        type='text'
        name='gameName'
        id='gameName'
        ref={gameNameRef}
        required
      />
      <br />
      <label htmlFor="sport">What sport do you want to play</label>
      <div>
      <StyledInput 
        type="text" 
        name="sport" 
        id="sport" 
        ref={sportsRef} 
        required
      />
      </div>
      
      <br />
      <label>Date/Time</label>
      <StyledInput
        type="datetime-local" 
        ref={dateTimeRef} 
        name="dateTime" 
        id="dateTime" 
        defaultValue="2023-10-06T15:00"
      />
      <br />
      <label>Party Size</label>
      <StyledInput 
        type="number" 
        ref={partySizeRef} 
        name="partySize" 
        id="partySize"
        defaultValue={4}
        />
      <br />
      <div class="dropdown-group">
          <label for="skillLevel">Skill Level:</label>
          <StyledDropDown id="skillLevel"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            {/* ref={skillLevelRef} */}
          </StyledDropDown>

          <label for="gameType">Game type:</label>
          <StyledDropDown id="gameType"
          value={gameType}
          onChange={(e) => setGameType(e.target.value)}
          >
            <option value="Casual">Casual</option>
            <option value="Competitive">Competitive</option>
            <option value="League">League</option>
            {/* ref={gameTypeRef} */}
          </StyledDropDown>
      </div>
      
      <label>Address</label>
      <StyledInput
        type="text" 
        ref={autocompleteInputRef} 
        name='address'
        id='address'
        defaultValue="123 Main Street, El Segundo, CA, USA"
      />
      <br />
      <StyledButton type='submit'>Create</StyledButton>
    </StyledGameForm>
    {/* <div id='map' ref={mapRef} style={{ width: "400px", height: "400px" }}></div> */}
    </div>
  )
}