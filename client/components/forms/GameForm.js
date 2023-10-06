import React, {useRef, useEffect} from 'react'
import { Loader } from "@googlemaps/js-api-loader"

export default function CreateGameForm () {
  const dateRef = useRef(null)
  const autocompleteInputRef = useRef(null)
  // const addressRef = useRef(null)
  const latRef = useRef(null)
  const lngRef = useRef(null)
  let autocomplete;

  useEffect(()=>{
    const loader = new Loader({
      apiKey: "AIzaSyAT5_1vYwxgEWt8wn_LKWDsVo0mOjqfxgs",
      version: "weekly",
    });

    
    loader.importLibrary('places')
    .then(()=>{
      autocomplete = new google.maps.places.Autocomplete(
        autocompleteInputRef.current,
        { types: ["address"] }
      );


    })
    
  },[])



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('LAT', latRef.current)
    console.log('LNG', lngRef.current)
  }
  return (
    <>
    <h1>Game Form</h1>
    <form onSubmit={handleSubmit}>
      <label>Basketball</label>
      <input type="radio"  name="basketball" id="" />
      <label>Golf</label>
      <input type="radio"  name="golf" id="" />
      <br />
      <label>Date/Time</label>
      <input type="datetime-local" ref={dateRef} name="" id="" />
      <br />
      <label>Party Size</label>
      <input type="number" name="" id="" />
      <br />
      <label>Location</label>
      <input ref={autocompleteInputRef} type="text" />
      <br />
      <button type='submit'>Click</button>
    </form>
    <div id='map' style={{ width: "400px", height: "400px" }}></div>
    </>
  )
}