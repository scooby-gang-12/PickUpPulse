import React from "react"

const UserLogin = ({toggle}) => {
return (
  <>
<h1>Login Here</h1>
<form>
  <label htmlFor='username'><strong>Username</strong></label><br></br>
  <input type='text'></input><br></br>
  <label htmlFor='password'><strong>Password</strong></label><br></br>
  <input type='text'></input><br></br>
  <button type='submit'>Sign in</button>
  <button type="submit" onClick={toggle}>sign up</button>
</form>

</>
)
}

export default UserLogin;
