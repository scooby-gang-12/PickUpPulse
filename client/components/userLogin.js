import React, {useRef} from "react"
import { useDispatch , useSelector} from 'react-redux';
import { login, loginUser } from "../features/auth/authSlice";
import {useNavigate} from 'react-router-dom'
import { StyledForm } from './styles/StyledForm.styled'
import { Container } from "./styles/Container.styled";
import { StyledButton } from "./styles/Button.styled";

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
    console.log('click')
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
  <Container>
  {/* <h1>Login Here</h1> */}
  <StyledForm onSubmit={handlelogin}>
    <label htmlFor='username'><strong>Username</strong></label><br></br>
    <input ref={usernameRef} type='text'></input><br></br>
    <label htmlFor='password'><strong>Password</strong></label><br></br>
    <input ref={passwordRef} type='password'></input><br></br>
    <StyledButton type='submit' >Sign In</StyledButton>
    <StyledButton type="button" onClick={handleNavigate}>Sign Up</StyledButton>
  </StyledForm>

    {error && <p>{error}</p>}
</Container>
)
}

export default UserLogin;