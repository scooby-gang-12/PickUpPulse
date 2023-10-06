import React from "react"
import { useDispatch } from 'react-redux';
import { login } from "../features/auth/authSlice";

const UserLogin = ({toggle}) => {
  const dispatch = useDispatch();
  const handlelogin = dispatch(login())
  

return (
  <>
<h1>Login Here</h1>
<form>
  <label htmlFor='username'><strong>Username</strong></label><br></br>
  <input type='text'></input><br></br>
  <label htmlFor='password'><strong>Password</strong></label><br></br>
  <input type='text'></input><br></br>
  <button type='submit' onSubmit={handlelogin}>Sign in</button>
  <button type="button" onClick={toggle}>sign up</button>
</form>

</>
)
}

export default UserLogin;
