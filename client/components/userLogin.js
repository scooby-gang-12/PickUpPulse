import React, {useRef} from "react"
import { useDispatch , useSelector} from 'react-redux';
import { login, loginUser } from "../features/auth/authSlice";
import {useNavigate} from 'react-router-dom'


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
  <>
{/* <h1>Login Here</h1> */}
<form onSubmit={handlelogin}>
  <label htmlFor='username'><strong>Username</strong></label><br></br>
  <input ref={usernameRef} type='text'></input><br></br>
  <label htmlFor='password'><strong>Password</strong></label><br></br>
  <input ref={passwordRef}type='password'></input><br></br>
  <button type='submit' >Sign in</button>
  <button type="button" onClick={handleNavigate}>sign up</button>
</form>

  {error && <p>{error}</p>}
</>
)
}

export default UserLogin;