import React, {useEffect, useState ,useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Loader } from "@googlemaps/js-api-loader"
import {getAllGames} from '../../features/games/gamesSlice'

import golfImg from '../../assets/golf.png'
import bBallImg from '../../assets/basketball.png'
export default function Map ({gamesArr}) {
  const [isLoading, setIsLoading] = useState(true)
    const locations = gamesArr.map((game)=>{
    return {lat: game.location.coordinates[1], lng: game.location.coordinates[0], gameName: game.gameName, sport: game.sport}
    })

  const mapRef = useRef(null);
  const googleMapRef = useRef(null)
  const dispatch = useDispatch()
  const initializeMap = async (center) => {
    if (window.google) {
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 13,
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
    



  const updateMarkers = (markers) => {
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
        const infoContent = `<p>${marker.gameName}</p>`
        
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
      apiKey: "AIzaSyAT5_1vYwxgEWt8wn_LKWDsVo0mOjqfxgs",
      version: "weekly",
    });
    loader.importLibrary('places').then( async ()=>{
      const location = await getCurrentLocation()
      initializeMap(location)
    }).then(async ()=> {
      dispatch(getAllGames())
      updateMarkers(locations)
      setIsLoading(false)
    })
  },[])

  useEffect(() => {
    if (gamesArr.length > 0) { 
        updateMarkers(locations);
    }
}, [gamesArr]);

  return (
  <div>
    <button>Golf</button>
    <button>Basketball</button>
    <div id='map' ref={mapRef} style={{ width: "400px", height: "400px" }}></div>
    </div>
  )
}