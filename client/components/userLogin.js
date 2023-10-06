import React from "react"
import { useDispatch , useSelector} from 'react-redux';
import { login } from "../features/auth/authSlice";
import {useNavigate} from 'react-router-dom'

const UserLogin = ({toggle}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogin = (e) => {
    e.preventDefault()
    dispatch(login())
    navigate('/dashboard')
  }
  


  const {isLoggedIn} = (useSelector((state) => state.auth))
  console.log(isLoggedIn)



return (
  <>
<h1>Login Here</h1>
<form onSubmit={handlelogin}>
  <label htmlFor='username'><strong>Username</strong></label><br></br>
  <input type='text' value={user.username}></input><br></br>
  <label htmlFor='password'><strong>Password</strong></label><br></br>
  <input type='text' value={user.password}></input><br></br>
  <button type='submit' >Sign in</button>
  <button type="button" onClick={toggle}>sign up</button>
</form>

</>
)
}

export default UserLogin;
