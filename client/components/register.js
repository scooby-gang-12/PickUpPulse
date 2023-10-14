import React, {useRef, useState, useEffect} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {registerUser} from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { StyledButton } from "./styles/Button.styled";
import { StyledForm } from "./styles/StyledForm.styled";
import { Container } from "./styles/Container.styled";
import { StyledInput } from "./styles/StyledInput.styled";
import VideoBG from "./LoginBG";


export default function SignUp({toggle}) {

 const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const fullNameRef = useRef();
  const golfRef = useRef();
  const basketballRef = useRef();
  const locationRef = useRef();

//if we come up with a landing page move it there 
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        locationRef.current = userLocation;
      })
    }
  }, [])

  const handleNavigate = () => {
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = {
      fullName: fullNameRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      favoriteSports: [],
      location: {
        type: "Point",
        coordinates: [locationRef.current.lng, locationRef.current.lat]
    },
    }
    if (golfRef.current.checked) {formValue.favoriteSports.push('golf')}
    if (basketballRef.current.checked) {formValue.favoriteSports.push('basketball')}
    console.log(formValue)
      dispatch(registerUser(formValue))
      .then((action) => {
        if (!action.error) {
          navigate('/')
        }
      })
  }



  return (
    <Container>
      <VideoBG />
      {/* <h1>Sign up</h1> */}
      <StyledForm onSubmit={handleSubmit}>
        {/* <label htmlFor="fullName"><strong>Full Name</strong></label><br></br> */}
        <StyledInput ref={fullNameRef} type='text' placeholder='Full Name'></StyledInput><br></br>
        {/* <label htmlFor='username'><strong>Username</strong></label><br></br> */}
        <StyledInput ref={usernameRef} type='text' placeholder='Username'></StyledInput><br></br>
        {/* <label htmlFor='password'><strong>Password</strong></label><br></br> */}
        <StyledInput ref={passwordRef} type='password' placeholder='Password'></StyledInput><br></br>
        <label htmlFor="chooseSports"><strong>Select Sports of Interest:</strong></label><br></br>
        <input type="checkbox" ref={basketballRef}></input>
        <label htmlFor='FavSports'>Basketball</label><br></br>
        <input type="checkbox"  ref={golfRef} ></input>
        <label htmlFor='FavSports'>Golf</label><br></br>
        
        <StyledButton type="submit">Sign up</StyledButton>
        
        <div>
          Already a user?
          <span onClick={handleNavigate}> Log in here </span>
        </div>
      </ StyledForm>
    </Container>
  )
}

