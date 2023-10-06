import React, {useRef, useEffect} from 'react'

export default function CreateGameForm () {
  const dateRef = useRef(null)
  const autocompleteInputRef = useRef(null)
  const addressRef = useRef(null)
  const latRef = useRef(null)
  const lngRef = useRef(null)
  let autocomplete;


  useEffect(()=>{
    const script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAT5_1vYwxgEWt8wn_LKWDsVo0mOjqfxgs&libraries=places&callback=initMap'
    script.async = true;

    document.body.appendChild(script)
    window.initMap = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        autocomplete = new window.google.maps.places.Autocomplete(
          autocompleteInputRef.current,
          { types: ["address"] }
        );
  
        autocomplete.addListener("place_changed", onPlaceChanged);
      }
    }
    return () => {
      document.body.removeChild(script)
    }
  },[])


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
    </>
  )
}