import React, {useRef} from "react"
import { useDispatch , useSelector} from 'react-redux';
import { login, loginUser } from "../features/auth/authSlice";
import {useNavigate} from 'react-router-dom'
import { StyledForm } from './styles/StyledForm.styled'
import styled from "styled-components";

import { StyledButton } from "./styles/Button.styled";
import { StyledInput } from "./styles/StyledInput.styled";


const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useRef replaces the useState & onChange
  
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {userInfo, loading, error} = useSelector((state)=>state.auth)

  const handleNavigate = () => {
    navigate('/register')
  }
  
  const handlelogin = (e) => {
    e.preventDefault()
    dispatch(loginUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }))
      .then((action)=>{
        if (!action.error) {
          navigate('/dashboard')
        }
      })
  }

return (
  <div>
    
    <StyledForm onSubmit={handlelogin}>
      {/* <label htmlFor='username'><strong>Username</strong></label><br></br> */}
      <StyledInput ref={usernameRef} type='text' placeholder='Username'></StyledInput><br></br>
      {/* <label htmlFor='password'><strong>Password</strong></label><br></br> */}
      <StyledInput ref={passwordRef} type='password' placeholder='Password'></StyledInput><br></br>
      <StyledButton type='submit' >Sign In</StyledButton>
      <StyledButton type="button" onClick={handleNavigate}>Sign Up</StyledButton>
      {error && <p>Username or password not found</p>}
    </StyledForm>

  </div>
)
}


export default UserLogin;